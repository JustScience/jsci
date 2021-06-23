import React from 'react'
import { GearCardWrap, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory } from './style'

export default function GearCard({ image, title, brand, category, href, children }) {
    return (
        <GearCardWrap href={href}>
            <GearThumbnail src={image} />
            <GearInfo>
                <div>
                    <GearTitle>{title}</GearTitle>
                    <GearBrand>{brand}</GearBrand>
                </div>
                <GearCategory>
                    <p>{category}</p>
                    {children}
                </GearCategory>
            </GearInfo>
        </GearCardWrap>
    )
}
