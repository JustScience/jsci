import React from 'react'
import downloadFile1 from './../freebies/Hydro Flask-Bm-96bpm.mp3'
import downloadFile2 from './../freebies/No122-136bpm-E.mp3'

export default function Success() {
    return (
        <div>
            <h1>Thank you for subscribing!</h1>
            <p>You should recieve an email with your download shortly.</p>
            <p>If you don't see it, check "promotions" or "spam" sections</p>
            <h2>Don't miss this limited offer!</h2>
            <a href={downloadFile1} download>Download Hydro Flask</a>
            <br />
            <a href={downloadFile2} download>Download No122</a>
        </div>
    )
}
