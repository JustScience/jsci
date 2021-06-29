const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Products {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        handle
                    }
                }
            }
        }
    `)

    data.allShopifyProduct.edges.forEach(({node}) => {
        actions.createPage({
            path: '/shop/' + node.handle,
            component: path.resolve('src/templates/shopify-product-template.js'),
            context: {shopifyId: node.shopifyId,}
        })
    })
}