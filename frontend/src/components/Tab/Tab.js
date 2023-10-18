import React from 'react'
import './Tab.css';

// const [image, getImages] = useState([]) 

const images = require.context('../../assets', true);
const imageList = images.keys().map(image => images(image));

export default function Tab() {
    return(
        <div id='image-container'>
            <h3>Stickers</h3>
            {imageList.map((image, index) => (
                            <div className="image">
                                <img src={image} height={50}width={50}/>
                            </div>
                            ))}
            {imageList.map((image, index) => (
                            <div className="image">
                                <img onClick={click} src={image} height={100}width={100}/>
                            </div>
                            ))}
        </div>
    )
}

function click() {
    console.log('k')
}