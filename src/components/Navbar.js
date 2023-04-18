import React from "react";
import '../assets/css/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <>
                <header className="navbar">
                    <div className="container">
                        <h2 className="logo">Anoop</h2>
                        <ul>
                            <li>Home /</li>
                            <li>Portfolio /</li>
                            <li>Skills /</li>
                            <li>Education /</li>
                            <li>Contact /</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </header>
            </>
        );
    }
}

export default Navbar;