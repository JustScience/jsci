import React from 'react'
import { GearCardWrap, GearThumbnailFrame, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory } from './style'

export default function GearCard({ image, title, brand, category, to, children }) {
    return (
        <GearCardWrap to={to}>
            <GearThumbnailFrame>
                <GearThumbnail src={image} />
            </GearThumbnailFrame>
            <GearInfo>
                <div>
                    <GearTitle>{title}</GearTitle>
                    <GearBrand>{brand}</GearBrand>
                </div>
                <GearCategory>
                    {children}
                    <p>{category}</p>
                </GearCategory>
            </GearInfo>
        </GearCardWrap>
    )
}
