import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    User Activity
                 </Navbar.Brand>
            </Navbar>
        </>
    )
}
