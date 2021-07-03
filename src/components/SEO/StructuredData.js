import React from 'react'
import { Helmet } from 'react-helmet'

export default function StructuredData() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://jsci.io",
                    "name": "JSci Beats",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "jscibeats@gmail.com",
                        "contactType": "Business Inquiries"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Melody Loop Samples",
                        "itemListElement": [
                        {
                            "@type": "OfferCatalog",
                            "name": "Music Composition Licenses",
                            "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "24 bit, 44.1k Stereo WAV Audio"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "Full Quality Instrument Mix Stems"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "Original MIDI Compositions"
                                }
                            }
                            ]
                        },
                        {
                            "@type": "OfferCatalog",
                            "name": "Music Sync Licenses",
                            "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "Web Content Creator Music"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "Film, TV & Video Game Music"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                "@type": "Service",
                                "name": "Advertising Music for Commercials"
                                }
                            }
                            ]
                        }
                        ]
                    }
                    }
                `}
            </script>
        </Helmet>
    )
}
