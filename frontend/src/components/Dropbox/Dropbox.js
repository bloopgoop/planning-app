import React, { Component, useRef, useState } from 'react';
import './Dropbox.css';


function Dropbox() {
    const fileInputRef = useRef(null);
    const dropboxRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            alert('Please only upload images');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        dropboxRef.current.style.backgroundColor = 'red';
        // You can add more visual cues for drag over event here
      };
      
      const handleDragLeave = (e) => {
        e.preventDefault();
        dropboxRef.current.style.backgroundColor = 'lightgray';
        // You can add more visual cues for drag leave event here
      };
      
      const handleDrop = (e) => {
        e.preventDefault();
        // const reader = new FileReader();
        // reader.onload = (e) => {
        //     setImage(e.target.result);
        // };
        let files = Array.from(e.dataTransfer.files); // Array of all files, upload many to be implemented

        // Get first file
        const first = files[0];
        console.log(first)
        if (first && first.type.startsWith('image/')) {
            const reader = new FileReader();
            console.log(reader)
            reader.onload = (e) => {
                setImage(e.target.result);
                console.log(fileInputRef.current)
                console.log(fileInputRef.current.value)
                console.log(first.name)
                
                // set file name to be the name of the file when dropbox used
                // fileInputRef.current.value = 'C:\\fakepath\\' + first;
            };
            reader.readAsDataURL(first);
        } else {
            setImage(null);
            alert('Please only upload images');
        }
        dropboxRef.current.style.backgroundColor = 'lightgray';
        
        
      };
      

      
    
    return (
        <>
            <div id='dropbox'>
                {!image 
                ? <div
                className='bin'
                ref={dropboxRef}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                Drop files here
                </div> 
                : <img className='bin' src={image} alt="upload-preview" />}
            </div>

            <label htmlFor='file-input-button' className='file-upload'>
                <span>Upload file:</span>
                <input
                id='file-input-button'
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ paddingLeft: '10px' }}
                />
            </label>

        </>


    );
}

export default Dropbox;
