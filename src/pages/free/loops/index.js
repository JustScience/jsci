import * as React from "react"
import SearchEngine from "../../../components/SEO/SearchEngine"
import Layout from '../../../components/Layout'
import Hero from '../../../components/Hero'
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