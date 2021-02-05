import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <Container fixed>
                <Grid className='footer-menu' container>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className="footer-title">
                            <h2>odeko</h2>
                        </div>
                        <div className="social-buttons">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className="company">
                            <h2 className="company-title">Company</h2>
                            <h3>About</h3>
                            <h3>Products</h3>
                            <h3>Business Portal</h3>
                            <h3>Order Online</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className="resources">
                            <h2 className="resources-title">Resources</h2>
                            <h3>News</h3>
                            <h3>Resource Center</h3>
                            <h3>Contact Support</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className="sign-up-footer">
                            <h2>Sign up</h2>
                            <ArrowForwardIcon />
                        </div>
                    </Grid>
                </Grid>
                <div className="divider-black"></div>
                <div className="credits">
                    <div className="credits-corp"><p>© 2020 Odeko, Inc. All Rights Reserved.</p></div>
                    <div className="privacy">
                        <a href="#">Privacy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;