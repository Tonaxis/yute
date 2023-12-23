import React from 'react'
import Carousel from "nuka-carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Images({ images, props, propsImg }) {
  return (
    <>
        {
            images.length > 1 ?
            <Carousel
                wrapAround
                autoPlay
                speed={2000}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}  style={{ cursor: "pointer", background: "none", border: "none" }}>
                        <ChevronLeft size={50} />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} style={{ cursor: "pointer", background: "none", border: "none" }}>
                        <ChevronRight size={50} />
                    </button>
                )}
                {...props}
            >
                {
                    images.map((image, index) => (
                        <img key={index} src={`${process.env.REACT_APP_STRAPI_API_BASE_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} width={'100%'} height={'350px'} style={{ objectFit: 'contain' }} {...propsImg} />
                        ))
                    }
            </Carousel> :
            <img src={`${process.env.REACT_APP_STRAPI_API_BASE_URL}${images[0].attributes.url}`} alt={images[0].attributes.alternativeText} width={'100%'} height={'350px'} style={{ objectFit: 'contain' }} {...propsImg} />

        }
    </>
  )
}
