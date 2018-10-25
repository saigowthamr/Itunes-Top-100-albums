import React from 'react';

import './header.css';


export default () => (
    <header className="header">
        <a href="/" style={{
            textDecoration: "none",
            color: "white", borderBottom: "1px solid red"
        }}>Top 100 Albums from Itunes</a>
    </header>
)