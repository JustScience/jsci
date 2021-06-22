import * as React from "react"
import Layout from './../../../components/Layout'
import Hero from './../../../components/Hero'
import JoinForm from './../../../components/JoinForm'
import FormCTA from './../../../components/FormCTA'

export default function FreeTrapBeats() {
    return (
        <Layout>
            <Hero />
            <FormCTA>
                <JoinForm tag="Artist" gift="Beats" />
            </FormCTA>
        </Layout>
    )
}