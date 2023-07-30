import React, { useState } from 'react'

const Content = () => {
    const [changeText, setchangeText] = useState('Website')

    function handleNameChange() {
        let arr = ["Website", "Page", "Project", "Lifestyle"];
        let num = Math.floor(Math.random() * arr.length)
        setchangeText(arr[num]);
    }
    return (
        <div>
            <h3>
                This is my new
                <span style={{ color: 'red', fontWeight: 'bold' }}> {changeText}</span>
            </h3>
            <button onClick={handleNameChange}>Click</button>
        </div>
    )
}

export default Content;
