import React from 'react'

import Layout from '../../../components/5-layout/Layout'
import Hero from '../../../components/Hero'
import PageTitle from '../../../components/PageTitle'
import FreebieGallery from '../../../components/FreebieGallery'
import AudioProduct from '../../../components/AudioProduct'

import downloadFile1 from '/src/freebies/Hydro Flask-Bm-96bpm.mp3'
import downloadFile2 from './../../../freebies/No122-136bpm-E.mp3'

export default function Success({location}) {
    return (
        <Layout location={location} crumbLabel="Success" >
            <Hero />
            <PageTitle
                title="Thank you for subscribing!"
                subtitle="You should recieve a confirmation email shortly."
            />
            <FreebieGallery>
            <AudioProduct 
                    title="Hydro Flask"
                    keySignature="Abm"
                    tempo="130 bpm"
                    src={downloadFile1}
                />
                <AudioProduct 
                    title="No. 122"
                    keySignature="Abm"
                    tempo="130 bpm"
                    src={downloadFile2}
                />
                <AudioProduct 
                    title="Hydro Flask"
                    keySignature="Abm"
                    tempo="130 bpm"
                    src={downloadFile1}
                />
                <AudioProduct 
                    title="No. 122"
                    keySignature="Abm"
                    tempo="130 bpm"
                    src={downloadFile2}
                />
            </FreebieGallery>
        </Layout>
    )
}
