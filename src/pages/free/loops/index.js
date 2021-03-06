import * as React from "react"
import SearchEngine from "../../../components/0-theme/SEO/SearchEngine"
import Layout from '../../../components/5-layout/Layout'
import Hero from '../../../components/3-sections/Hero'
import JoinForm from '../../../components/JoinForm'
import FormCTA from '../../../components/FormCTA'

export default function FreeMelodyLoops({location}) {
    return (
        <>
            <SearchEngine
                url="free/loops"
                title="Free Melody Loops" 
                description="Download free melody loops and compositions for music producers."
            />
                <Layout location={location} crumbLabel="Melody Loops" >
                <Hero />
                <FormCTA>
                    <JoinForm tag="Producer" gift="Loops" />
                </FormCTA>
            </Layout>
        </>
    )
}