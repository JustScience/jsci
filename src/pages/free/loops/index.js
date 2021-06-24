import * as React from "react"
import SearchEngine from "../../../components/SEO/SearchEngine"
import Layout from '../../../components/Layout'
import Hero from '../../../components/Hero'
import JoinForm from '../../../components/JoinForm'
import FormCTA from '../../../components/FormCTA'

export default function FreeMelodyLoops() {
    return (
        <>
            <SearchEngine />
            <Layout>
                <Hero />
                <FormCTA>
                    <JoinForm tag="Producer" gift="Loops" />
                </FormCTA>
            </Layout>
        </>
    )
}