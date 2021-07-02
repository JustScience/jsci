import React from 'react'
import AudioPreviewWrap from './style'

export default function AudioPreview({src}) {
    return (
        <AudioPreviewWrap
            src={src}
            autoPlay={false}
            layout='horizontal-reverse'
            customAdditionalControls={[]}
        />
    )
}
