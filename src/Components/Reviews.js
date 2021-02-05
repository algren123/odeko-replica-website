import React from 'react'
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import "./Review.css"
import RoomIcon from '@material-ui/icons/Room';

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return(
        <div>
            {value===index && <h1>{children}</h1>}
        </div>
    )
}

function Review() {

    const [value, setValue] = React.useState(0)

    const handleChange = (e, value) => {
        setValue(value)
    }

    return(
        <div className="review">
            <Container fixed>
                <div className="review-title">
                    <h1 className="review-headline">This is what some of our 750+ local café owners have to say</h1>
                </div>
                <AppBar className="appbar" style={{color: "black", backgroundColor: 'transparent', boxShadow: "none"}} position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab  icon={<Avatar style={{width: "10vw", height: '10vw'}} className="tab-img" alt="test avatar" src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f497167013082a8f60c9eb1_birch-color-p-500.png"/>} />
                        <Tab  icon={<Avatar style={{width: "10vw", height: '10vw'}} className="tab-img" alt="test2 avatar" src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f4971676c7d7698d8401eaa_taproom-color-p-500.png" />} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <p className="owner-text">Odeko doesn't just save us hours in tedious labor every day... it improves the bottom line. Their customer service is outstanding, and we know that at the end of the day, no matter what, they have our back.</p>
                                <div className="owner-details">
                                    <h2>Jeremy Lyman</h2>
                                    <p>Birch Coffee Co-Owner</p>
                                    <p><RoomIcon className="pin" />NEW YORK, NY</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img className='owner-img' src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f8da766535c533a36932719_birch-jeremy2-p-800.jpeg" alt=""/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <p className="owner-text">Odeko continues to allow us to be a part of our customers’ routines during this new normal. It doesn’t get in the way of our staff and it’s simple and intuitive to use for our customers. They've  figured out how to make it work.</p>
                                <div className="owner-details">
                                    <h2>Jonathan Pascual</h2>
                                    <p>Taproom Coffee Owner</p>
                                    <p><RoomIcon className="pin" />ATLANTA, GA</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img className='owner-img' src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f48269e6d9ff6fbc057c41e_taproom-4-p-800.jpeg" alt=""/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </AppBar>
                    
            </Container>
        </div>
        
    )

}

export default Review;