import React from 'react'

export const ErrorsMessage = ({ error }) => {
    if(error) {
        switch (error.type) {
            case 'required':
                return <p>This is required</p>
            case 'minLength':
                return <p>Your full name minium</p>
            case 'pattern':
                return <p>Enter a valid email address</p>
            default:
                return null
        }
    }
    
    return null
}