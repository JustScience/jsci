import * as React from "react"
import SearchEngine from "../../../components/SEO/SearchEngine"
import Layout from '../../../components/Layout'
import Hero from '../../../components/Hero'
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