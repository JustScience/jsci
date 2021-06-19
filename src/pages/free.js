import * as React from "react"

export default function Free() {
  return (
    <form action="/api/join" method="POST">
        <h2 style={{ marginBottom: `16px` }}>Send a Message</h2>
        <div style={{ marginBottom: `8px` }}>
            <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
                Name:
            </label>
            <input name="name" id="name" />
        </div>
        <div style={{ marginBottom: `8px` }}>
            <label
                style={{ display: `block`, marginBottom: `4px` }}
                htmlFor="email"
            >
                Email:
            </label>
            <input name="email" id="email" type="email" />
        </div>
        <div>
            <button>Send Message</button>
        </div>
    </form>
  )
}