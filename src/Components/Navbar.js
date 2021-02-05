import React, { Component, useState, useEffect } from 'react'
import LocalCafe from '@material-ui/icons/LocalCafe'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "./Navbar.css"
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {

        const [click, setClick] = useState(false);
        const [button, setButton] = useState(true);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const showButton = () => {
            if (window.innerWidth <= 960) {
                setButton(false)
            } else {
                setButton(true)
            }
        };

        useEffect(() => {
            showButton()
        }, [])

        window.addEventListener('resize', showButton);

        return(
            <Container fixed>
                <nav className='topnav'>
                    <div className="web-logo" onClick={closeMobileMenu}>
                        <h1>odeko</h1>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <CloseIcon/> : <MenuIcon />}
                    </div>

                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        <a href="#" onClick={closeMobileMenu}>About</a>
                        <a href="#" onClick={closeMobileMenu}>Products</a>
                        <a href="#" onClick={closeMobileMenu}>News</a>
                        <a href="#" onClick={closeMobileMenu}>Order Online</a>

                        <Button id='getstarted-button' variant="outlined" onClick={closeMobileMenu}>
                            GET STARTED
                        </Button>
                    </div>
                    
                </nav>
            </Container>
            
        )
    }

export default Navbar;