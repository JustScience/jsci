import React from 'react'
import { JoinWrap, FormWrap, FormTitle, FormField } from './style'

export default function Join({tag, gift}) {
    return (
        <JoinWrap>
            <FormWrap action="/api/join" method="POST">
                <FormTitle>Get Free {gift}!!</FormTitle>
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
                    <button>Get Free {gift}</button>
                </FormField>
            </FormWrap>
        </JoinWrap>
    )
}
