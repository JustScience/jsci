import React from 'react'
import InputField from './style'

export default function Input({ type, value, placeholder, onChange }) {
    return (
        <InputField 
            type={type || "text"} 
            value={value} 
            placeholder={placeholder}
            onChange={onChange} 
        />
    )
}
