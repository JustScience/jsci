import * as React from "react"

export default function SendGridUI() {
  return (
    <form action="/api/sendgrid" method="POST">
      <h2>Send Me an Email</h2>
      <p>Please include your name and contact information.</p>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input name="subject" id="subject" />
      </div>
      <div>
        <label htmlFor="text">Message:</label>
        <textarea name="text" id="text" />
      </div>
      <div>
        <button>Send Email</button>
      </div>
    </form>
  )
}
