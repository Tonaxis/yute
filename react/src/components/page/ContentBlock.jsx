import React from 'react'
import Markdown from 'markdown-to-jsx'
import MarkdownCode from '../markdown/MarkdownCode';
import Images from './Images';

export default function ContentBlock({ data }) {
  return (
    <div className="page__content__block">
        {
            data.text &&
            <div className="markdown">
            <Markdown options={
                {
                    overrides: {
                        pre: {
                            component: (code) => {
                                const props = code.children.props
                                return <MarkdownCode children={props.children} language={props.className?.slice(5)} />
                            },
                        },
                    }
                }
            }>
                {data.text}
            </Markdown>
            </div>
        }
        { data.images?.data && <Images images={data.images.data} propsImg={{ className: 'page__content__block__image' }} /> }
    </div>
  )
}
