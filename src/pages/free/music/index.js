import * as React from "react"
import SearchEngine from "../../../components/SEO/SearchEngine"
import Layout from '../../../components/Layout'
import Hero from '../../../components/Hero'
import JoinForm from '../../../components/JoinForm'
import FormCTA from '../../../components/FormCTA'

export default function FreeBackgroundMusic({location}) {
    return (
        <>
            <SearchEngine
                url="free/music"
                title="Free Sync Music" 
                description="Download free background sync music for filmmakers and content creators."
            />
                <Layout location={location} crumbLabel="Sync Music" >
                <Hero />
                <FormCTA>
                    <JoinForm tag="Creator" gift="Tracks" />
                </FormCTA>
            </Layout>
        </>
    )
}