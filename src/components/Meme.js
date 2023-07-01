
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
                randomImage: randomImg,
                topText: "",
                bottomText: ""
            }
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form className="meme--form">
                <input 
                    id="one" 
                    type="text" 
                    placeholder="Top text" 
                    name="topText" 
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    id="two" 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button id="meme--form--submit" type="button" onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </form> 
            <div className='meme'>
                <img id="meme-img" src={meme.randomImage} />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;