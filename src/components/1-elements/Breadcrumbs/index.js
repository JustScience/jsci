import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import './crumbs.css'

export default function Breadcrumbs({location,crumbLabel}) {
    return (
        <Breadcrumb 
            location={location}
            crumbLabel={crumbLabel}
        />
    )
}
