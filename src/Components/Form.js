import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./Form.css"


function Form() {

    return(
        <div className="form">
            <Container fixed>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div className="form-leftside">
                            <h1 className="hear-from-you">We'd love to hear from you</h1>
                            <h3 className="get-in-touch" >Tell us how we can help and we'll get in touch shortly.</h3>
                            <img className="form-image" src="https://assets-global.website-files.com/5f31579ada33200d8eb23cf6/5f78ca9e976b54b4e25dfc5e_barista-spot-p-500.png" alt=""/>
                        </div>
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="form-rightside">
                            <p className="email-contact">Need to contact support? Email us at <p className="email">support@odeko.com</p></p>
                            <TextField style={{marginRight: "35px", width: "47%"}} variant="outlined" label="Full Name" margin="normal" required />
                            <TextField style={{width: "47%"}} variant="outlined" label="Company Name" margin="normal" />
                            <TextField variant="outlined" label="Email" fullWidth margin="normal" required />
                            <TextField variant="outlined" label="Phone Number" fullWidth margin="normal" required/>

                            <h2>Please contact me about:</h2>

                            <FormControlLabel style={{width: "40%"}} control={<Checkbox label="Wholesale"/>} label="Mobile Ordering" />
                            <FormControlLabel style={{width: "50%"}} control={<Checkbox label="Wholesale"/>} label="Wholesale" />
                            <FormControlLabel style={{width: "40%"}} control={<Checkbox label="Wholesale"/>} label="Supply Chain" />
                            <FormControlLabel style={{width: "50%"}} control={<Checkbox label="Wholesale"/>} label="Media Inquiries" />

                            <h3>Something else?</h3>

                            <TextField
                            className=""
                            multiline
                            rows={4}
                            variant='outlined'
                            style={{width: "100%"}}
                            />

                            <Button style={{backgroundColor:  "#e11ea5", color: "white", width: "100%", marginTop: "20px"}} variant="outlined">Submit</Button>
                        </div>
                        

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Form;