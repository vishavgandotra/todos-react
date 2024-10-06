import React from 'react'
import { useParams } from 'react-router-dom'

export const Test = () => {
    const {testparam} = useParams();
    return (
        <div>
            Testing URI parms value : <b>{testparam}</b>
        </div>
    )
}
