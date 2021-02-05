import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Container from "@material-ui/core/Container"
import './MainCarousel.css'

function Carousel() {
    return(
        <>
        <Container fixed>
            <div className="carousel-slider">
                <Splide
                options={ {
                    rewind: true,
                    height: '70%',
                    width: '100%',
                    focus: 'center',
                }}>
                    <SplideSlide>
                        <img
                        className='slider-img'
                        src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
                        alt="First Slide"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img 
                        className='slider-img'
                        src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="Second Slide"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img 
                        className='slider-img'
                        src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="Third Slide"/>
                    </SplideSlide>
                </Splide>
            </div>
            
        </Container>
        </>
    )
}

export default Carousel;