import React from 'react'
import { JoinWrap, FormWrap, FormField } from './style'

export default function Join({tag, gift}) {
    return (
        <JoinWrap>
            <FormWrap action="/api/join" method="POST">
                <h2>Get FREE {gift}!!</h2>
                <FormField>
                    <label htmlFor="name">Name:</label>
                    <input name="name" id="name" />
                </FormField>
                <FormField>
                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" type="email" />
                </FormField>
                <input name="tag" id="tag" type="hidden" value={tag} />
                <FormField>
                    <button>Gimme My {gift}</button>
                </FormField>
            </FormWrap>
        </JoinWrap>
    )
}
