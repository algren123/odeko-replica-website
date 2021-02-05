import CoffeeCard from './CoffeeCard'
import React from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"


const Content = () => {


    return(
        <Container fixed>
            <Grid 
            container>
                <Grid item xs={6} sm={6} lg={3}>
                    <CoffeeCard
                        title="Birch Coffee"
                        description="New York, NY"
                        imgSrc={"https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        />
                </Grid>
                <Grid item xs={6} sm={6} lg={3}>
                    <CoffeeCard
                            title="Under Coffee"
                            description="Charlotte, NC"
                            imgSrc={"https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            />
                </Grid>
                <Grid item xs={6} sm={6} lg={3}>
                    <CoffeeCard
                            title="La Colombe"
                            description="Philadelphia, PA"
                            imgSrc={"https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            />
                </Grid>
                <Grid item xs={6} sm={6} lg={3}>
                    <CoffeeCard
                            title="Revelator Coffee"
                            description="Birmingham, AL"
                            imgSrc={"https://images.pexels.com/photos/914390/pexels-photo-914390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            />
                </Grid>
            </Grid>
        </Container>
        

    )
}

export default Content;