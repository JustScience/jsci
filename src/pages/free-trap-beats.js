import * as React from "react"
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Join from './../components/Join'
import FormCTA from './../components/FormCTA'

export default function FreeTrapBeats() {
    return (
        <Layout>
            <Hero />
            <FormCTA>
                <Join tag="Artist" gift="Beats" />
            </FormCTA>
        </Layout>
    )
}