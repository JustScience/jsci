import React from 'react'
import Form from '../2-blocks/Form'
import { FormField } from '../2-blocks/Form/style'

export default function JoinForm({tag, gift}) {
    return (
        <Form 
            title={"Get Free " + gift}
            instruction={"Subscribe for 5 Free " + gift}
            action="/api/join" 
            method="POST"
        >
            <FormField>
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" required/>
            </FormField>
            <FormField>
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="email" required/>
            </FormField>
            <input name="tag" id="tag" type="hidden" value={tag} />
            <FormField>
                <button>Get Free {gift}</button>
            </FormField>
        </Form>
    )
}
