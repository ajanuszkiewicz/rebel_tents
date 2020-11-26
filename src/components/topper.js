import React from 'react'

export default function Topper(props) {
    return(
        <div className="bg-gray-lighter mb-8">
            <div className="container pl-8 h-24 flex items-center">
                <h1>{props.headerText}</h1>
            </div>
        </div>
    )
}