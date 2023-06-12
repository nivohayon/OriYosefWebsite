import React, { useState } from 'react'
import Body from './Body/Body';
import ThemeContext from '../Context/ThemeContext';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { Container, Row } from 'react-bootstrap';
import '../App.css'

function Main() {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{color: theme, setTheme}}>
            <Container fluid className={`${theme} app`} >
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Body />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </ThemeContext.Provider>
    )
}

export default Main
