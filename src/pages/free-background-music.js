import * as React from "react"
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Join from './../components/Join'
import FormCTA from './../components/FormCTA'

export default function FreeBackgroundMusic() {
    return (
        <Layout>
            <Hero />
            <FormCTA>
                <Join tag="Creator" gift="Tracks" />
            </FormCTA>
        </Layout>
    )
}