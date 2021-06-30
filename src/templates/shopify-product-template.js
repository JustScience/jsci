/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { graphql, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import CartContext from '../context/CartContext'
import SearchEngine from '../components/SEO/SearchEngine'
import ProductQuantityAdder from '../components/Cart/ProductQuantityAdder'
import ProductImageGallery from './product-image-gallery'
import Layout from '../components/Layout'
import Contain from '../components/Contain'
import { HeaderSpacer } from '../components/Layout/style'
import ProductPage from '../components/ProductPage'
import { ProductInfo, ProductPrice, ProductPurchase } from '../components/ProductPage/style'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        product: shopifyProduct(shopifyId: {eq: $shopifyId}) {
            storefrontId
            shopifyId
            handle
            title
            description
            images {
                id
                src
                gatsbyImageData(height: 540, width: 540)
            }
            priceRangeV2 {
                minVariantPrice {
                    amount
                }
            }
        }
    }
`;

export default function ShopifyProduct({data}) {
    const { title, description, storefrontId } = data.product
    const images = data.product.images

    const {getProductById} = React.useContext(CartContext)
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)
    const {search, origin, pathname} = useLocation()
    const variantId = queryString.parse(search).variant

    React.useEffect(() => {
        getProductById(storefrontId).then((result) => {
            setProduct(result)
            setSelectedVariant(result.variants.find(({id}) => id === variantId) || result.variants[0] )
        })
    },[getProductById, storefrontId, setProduct, variantId])

    const handleVariantChange = (e) => {
        const newVariant = product?.variants.find(v => v.id === e.target.value)
        setSelectedVariant(newVariant)
        navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{
            replace: true
        })
    }


    return (
        <>
            <SearchEngine 
                title={data.product.title}
                description={data.product.description}
                image={data.product.images[0]}
            />
            <Layout>
                <HeaderSpacer />
                <Contain>
                    <ProductPage>
                        <ProductImageGallery 
                            selectedVariantImageId={selectedVariant?.image.id} 
                            images={images} 
                        />
                        <ProductInfo>
                            {/* <button onClick={() => navigate(-1)}>BACK</button> */}
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {/* <p>{storefrontId}</p> */}
                            {/* <p>{shopifyId}</p> */}
                            <ProductPurchase>
                                {product?.availableForSale && !!selectedVariant && (
                                    <>
                                        {product?.variants.length > 1 &&
                                            <select value={selectedVariant.id} onChange={handleVariantChange}>
                                                File Types: 
                                                {product?.variants.map(v => (
                                                    <option 
                                                        key={v.id}
                                                        value={v.id}
                                                    >
                                                        {v.title}
                                                    </option>
                                                ))}
                                            </select>
                                        }
                                        {!!selectedVariant && 
                                            <>
                                                <ProductPrice><span>$</span>{selectedVariant.price}</ProductPrice>
                                                <ProductQuantityAdder 
                                                    available={selectedVariant.available}
                                                    variantId={selectedVariant.id} 
                                                />
                                            </>
                                        }
                                    </>
                                )}
                                </ProductPurchase>
                        </ProductInfo>
                    </ProductPage>
                </Contain>
            </Layout>
        </>
    )
}
