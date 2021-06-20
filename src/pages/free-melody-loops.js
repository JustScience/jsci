import * as React from "react"
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Join from './../components/Join'
import FormCTA from './../components/FormCTA'

export default function FreeMelodyLoops() {
    return (
        <Layout>
            <Hero />
            <FormCTA>
                <Join tag="Producer" gift="Loops" />
            </FormCTA>
        </Layout>
    )
}