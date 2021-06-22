import React from 'react'
import { GearCardWrap, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory } from './style'
import gearImage from '../../images/banner-bg-1.png'

export default function KitCard({title, brand, category, href, children}) {
    return (
        <GearCardWrap href={href}>
            <GearThumbnail src={gearImage} />
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
