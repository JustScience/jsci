import React from 'react'
import { AffiliatePageWrap, AffiliateImage, AffiliateInfo } from './style'
import Href from '../Button/href'

export default function AffiliatePage({ name, brand, description, image, url }) {
    return (
        <AffiliatePageWrap>
            <AffiliateImage 
                src={image}
                alt={name}
            />
            <AffiliateInfo>
                <h1>
                    {name}
                    <span> by {brand}</span>
                </h1>
                <p>{description}</p>
                <Href href={url}>Shop for {name}</Href>
            </AffiliateInfo>
        </AffiliatePageWrap>
    )
}
