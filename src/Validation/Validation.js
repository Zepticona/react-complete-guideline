import React from 'react'

const Validation = (props) => {
    let validatonMessage = 'Text too short'
    if(props.textLength > 5) {
        validatonMessage = 'Text long enough'
    }
    
    return (
        <div>
            {validatonMessage}
        </div>
    )
}
export default Validation;