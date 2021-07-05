import React from 'react'
import CheckboxWrap from './style'
import Icon from '../Icon'

export default function Checkbox({checked}) {
    return (
        <CheckboxWrap checked={checked}>
            <div>
                <Icon shape="check" size="20px" color="white" />
            </div>
        </CheckboxWrap>
    )
}
