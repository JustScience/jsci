import React from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { AudioProductWrap, AudioProductInfo, AudioProductTitle, DownloadButton } from './style'

export default function AudioProduct({ title, keySignature, tempo, src }) {
    return (
        <AudioProductWrap>
            <AudioProductInfo>
                <AudioProductTitle>{title}</AudioProductTitle>
                <p>{keySignature} - {tempo}</p>
            </AudioProductInfo>
            <AudioPlayer
                autoPlay={false}
                src={src}
                layout='horizontal-reverse'
                // onPlay={e => console.log("onPlay")}
                customAdditionalControls={[]}
                // other props here
            />
            <DownloadButton to={src} download>Download {title}</DownloadButton>
        </AudioProductWrap>
    )
}
