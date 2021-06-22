import * as React from "react"
import Layout from './../../../components/Layout'
import Hero from './../../../components/Hero'
import JoinForm from './../../../components/JoinForm'
import FormCTA from './../../../components/FormCTA'

export default function FreeMelodyLoops() {
    return (
        <Layout>
            <Hero />
            <FormCTA>
                <JoinForm tag="Producer" gift="Loops" />
            </FormCTA>
        </Layout>
    )
}