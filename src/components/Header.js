import React from 'react';
import trollFace from '../images/troll-face.png'

function Header() {
    return (
        <header>
            <div className='header--name'>
                <img className="troll-face" src={trollFace}/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header;