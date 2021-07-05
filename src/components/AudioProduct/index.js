import React from 'react'
import AudioPreview from '../2-blocks/AudioPreview'
import { AudioProductWrap, AudioProductInfo, AudioProductTitle, DownloadButton } from './style'

export default function AudioProduct({ title, keySignature, tempo, src }) {
    return (
        <AudioProductWrap>
            <AudioProductInfo>
                <AudioProductTitle>{title}</AudioProductTitle>
                <p>{keySignature} - {tempo}</p>
            </AudioProductInfo>
            <AudioPreview
                src={src}
            />
            <DownloadButton to={src} download>Download {title}</DownloadButton>
        </AudioProductWrap>
    )
}
