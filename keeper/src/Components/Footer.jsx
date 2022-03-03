import React from "react";
import '../App.css';

function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className="footer fixed-bottom">
            <p>
                Copyright Ⓒ {currentYear}
            </p>
        </div>
    );
}

export default Footer;