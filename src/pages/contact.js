import * as React from "react"
import SearchEngine from '../components/SEO/SearchEngine'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FormCTA from '../components/FormCTA'
import Form from '../components/Form'
import { FormField } from '../components/Form/style'

export default function SendGridUI({location}) {
  return (
    <>
      <SearchEngine title="Contact JSci" />
      <Layout location={location} crumbLabel="Contact Me" >
        <Hero />
        <Section>
          <FormCTA>
            <Form 
              title="Send Me an Email" 
              instruction="Please include name and contact info" 
              action="/api/sendgrid" 
              method="POST"
            >
              <FormField>
                <label htmlFor="subject">Subject:</label>
                <input name="subject" id="subject" />
              </FormField>
              <FormField>
                <label htmlFor="text">Message:</label>
                <textarea name="text" id="text" />
              </FormField>
              <FormField>
                <button>Send Email</button>
              </FormField>
            </Form>
          </FormCTA>
        </Section>
      </Layout>
    </>
  )
}
