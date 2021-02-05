import React from 'react'
import "./News.css"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import NewsCard from './NewsCard'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function News() {
    return(
        <Container fixed>
            <div className="news-title">
                <h1 className="news-text" >News</h1>
            </div>
        
            <Grid container>
                <Grid item xs={12} sm={6} lg={4}>
                    <NewsCard 
                    img="https://assets-global.website-files.com/5f35ae0e3a168c2b7fa16ded/5ffd265573d1f17271cefe62_962A9905-2-p-800.jpeg"
                    header="Cowabunga Coffee Roasters"
                    title="Cowabunga Coffee Roasters"
                    date="January 12, 2021"
                    content="Cowabunga Coffee Roasters not only has fantastic cold brew on tap, every espresso drink you could ask for, and an impressive selection of specialty..."
                    ></NewsCard>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <NewsCard 
                    img="https://assets-global.website-files.com/5f35ae0e3a168c2b7fa16ded/5fd857a13343fc0556c2ff3c_Granola%20Lab-p-1080.jpeg"
                    header="Granola Lab"
                    title="Granola Lab"
                    date="December 15, 2020"
                    content="When we found out that a Brooklyn-based, small batch, handcrafted granola company was making granola with ground coffee and organic dark chocolate –...

                    "
                    ></NewsCard>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <NewsCard 
                    img="https://assets-global.website-files.com/5f35ae0e3a168c2b7fa16ded/5fd3e91a44b0503df906e589_unnamed.jpg"
                    header="Condesa Coffee"
                    title="Condesa Coffee"
                    date="December 11, 2020"
                    content="Condesa Coffee – Kind people, specialty coffee. And with Root Baking as their new bread & pastry provider, it's just keeps getting better!"
                    ></NewsCard>
                </Grid>
            </Grid>

            <div className="news-readmore">
                <h2 className="readmore-text">Read More</h2>
                <ArrowForwardIcon className="arrow-right"/>
            </div>
        </Container>
    )
}

export default News;