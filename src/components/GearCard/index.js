import React from 'react'
import { GearCardWrap, GearThumbnailFrame, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory, GearDescription } from './style'

export default function GearCard({ image, title, brand, category, description, to, children }) {
    return (
        <GearCardWrap to={to}>
            <GearThumbnailFrame>
                <GearThumbnail src={image} />
            </GearThumbnailFrame>
            <GearInfo>
                <div>
                    <GearTitle>{title}</GearTitle>
                    <GearBrand>{brand}</GearBrand>
                    <GearDescription>{description}</GearDescription>
                </div>
                <GearCategory>
                    {children}
                    <p>{category}</p>
                </GearCategory>
            </GearInfo>
        </GearCardWrap>
    )
}
