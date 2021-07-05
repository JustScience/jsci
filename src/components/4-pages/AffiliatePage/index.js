import React from 'react'
import { AffiliatePageWrap, AffiliateImage, AffiliateInfo } from './style'
import Btn from '../../1-elements/Button/aBtn'

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
                <Btn href={url}>Shop for {name}</Btn>
            </AffiliateInfo>
        </AffiliatePageWrap>
    )
}
