import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const About = () => {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    return (
        <div>
            ABout {id}
        </div>
    )
}
