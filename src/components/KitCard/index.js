import React from 'react'
import { KitCardWrap, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory } from './style'
import gearImage from '../../images/banner-bg-1.png'

export default function KitCard({title, brand, category, href, children}) {
    return (
        <KitCardWrap href={href}>
            <GearThumbnail image={gearImage} />
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
        </KitCardWrap>
    )
}
