import React from 'react'
import ContentBlock from './ContentBlock'
import Images from './Images'

export default function PageContent({ page }) {
    return (
        <div>
            <h1>{page.title}</h1>
            { page.images?.data && <Images images={page.images.data} /> }
            {
                page.content && page.content.map((data, index) => (
                    <ContentBlock key={index} data={data} />
                ))
            }
        </div>
    )
}
