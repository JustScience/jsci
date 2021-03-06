import * as React from "react"
import SearchEngine from "../../../components/0-theme/SEO/SearchEngine"
import Layout from '../../../components/5-layout/Layout'
import Hero from '../../../components/3-sections/Hero'
import JoinForm from '../../../components/JoinForm'
import FormCTA from '../../../components/FormCTA'

export default function FreeTrapBeats({location}) {
    return (
        <>
            <SearchEngine
                url="free/beats"
                title="Free Beats" 
                description="Download free hip hop beats and r&amp;b instrumntals for recording artists."
            />
                <Layout location={location} crumbLabel="Instrumental Beats" >
                <Hero />
                <FormCTA>
                    <JoinForm tag="Artist" gift="Beats" />
                </FormCTA>
            </Layout>
        </>
    )
}