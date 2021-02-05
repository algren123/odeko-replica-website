import React, { Component } from 'react'
import "./HeroSection.css"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"



class HeroSection extends Component {

    render() {
        return(
                <Container fixed>
                    <Grid className="herosection" container>
                        <Grid className="herosection-text-grid" item xs={12} md={6}>
                            <div className="herosection-text">
                                <h1 className="order-text">Order a</h1>
                                <h1 className="latte-text">latte</h1> 
                            </div>
                            <div className="hero-buttons">
                                    <Button size="large" id='app-button' variant='contained' disableElevation>Order Now</Button>
                                    <Button size="large" id='getapp-button' variant='outlined'>Get the App</Button>
                                </div>
                            
                        </Grid>
                        <Grid className="herosection-image-grid" item xs={12} md={6}>
                            <div>
                                <img className='hero-image' src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5fb2b456ff2b0c2779c3f111_illo%20skater%20bg.png" alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="mobile-text">
                        <h1>Mobile ordering and supply chain management for cafés</h1>
                    </div>
                </Container>
                
        )
    }
}

export default HeroSection