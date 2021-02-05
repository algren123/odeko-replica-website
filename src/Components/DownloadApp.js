import React from 'react'
import "./DownloadApp.css"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

function DownloadApp() {

    return(
        <div className="downloadapp">
            <Container fixed>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <img className="downloadapp-img" src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f4e9d71b7d6d94802169d9d_phone-group-p-800.png" alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div className="downloadapp-rightside">
                            <div className="rightside-header">
                                <img className="downloadapp-right-img" src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f497cdda5fd5b51cda5ee90_coffee-hand.png" alt=""/>
                                <h1 className="downloadapp-header">Download the Odeko App</h1>
                            </div>
                            <p className='downloadapp-text'>Order ahead and get rewarded. Your favorite cafés are now online and in the Odeko app so you can safely order and pay ahead of time.</p>
                            <Button variant="contained" size="large" id="downloadapp-button">Get the App</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    )
}

export default DownloadApp;