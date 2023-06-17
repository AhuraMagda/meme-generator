
import React from 'react';
import memesData from "../memesData";


function Meme() {
    const memesArray = memesData.data.memes

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const getRandomMeme = () => {
        let randomNumber = Math.floor(Math.random() * ((memesData.data.memes).length));
        let randomImg = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomImg
            }
        })
    }
    return (
        <main>
            <form className="meme--form">
                <input id="one" type="text" placeholder="Top text"/>
                <input id="two" type="text" placeholder="Bottom text"/>
                <button id="meme--form--submit" type="button" onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </form> 
            <img id="meme-img" src={meme.randomImage} />
        </main>
    )
}

export default Meme;