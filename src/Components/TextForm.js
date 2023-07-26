import React, { useState } from 'react'


export default function TextForm(prop) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("hello the button is click");
        setText("hello this is  set text")
        let uptext = text.toUpperCase();
        setText(uptext)
    }

    const handleloClick = (v) => {
        let locase = text
        setText(locase.toLowerCase());
    }

    const handleOnchange = (v) => {
        console.log("handle on change");
        setText(v.target.value)

    }
    const handleToClear = (v) => {
        v = ""
        setText(v)
    }
    const textToSpeech=()=> {
       const Speech=new SpeechSynthesisUtterance();
       const message=document.getElementById('textBox').value
        Speech.lang='eng';
        Speech.text=message
        window.speechSynthesis.speak(Speech)

    }
    const copyHandler=()=>{
        let text=document.getElementById('textBox')
        text.select()
        navigator.clipboard.writeText(text.value)   
    }
     const ExtraSpaceRemove=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
     }

    

    return (
        <>
            <div className="mb-3 my-3 container ">
                <h3 style={{color:prop.mode==='light'?'black':'white'}}  >{prop.heading} </h3>
                <label htmlFor="textBox" className="form-label">Disabled input</label>
                <textarea type="text" id="textBox" onChange={handleOnchange} value={text} style={{backgroundColor:prop.mode==='light'?'white':'grey',color:prop.mode==='light'?'black':'white'}} rows="8" className="form-control" placeholder="Disabled input" />

                <button onClick={handleUpClick} className="btn my-3 btn-primary">Conver To Uppercase</button>
                <button onClick={handleloClick} className="btn mx-3 my-3 btn-warning">Conver To Lovercase</button>
                <button onClick={handleToClear} className="btn mx-3 my-3 btn-danger">Clear Text</button>
                <button onClick={textToSpeech} className="btn mx-3 my-3 btn-danger">speack</button>
                <button onClick={copyHandler} className="btn mx-3 my-3 btn-danger">Copy Text</button>
                <button onClick={ExtraSpaceRemove} className="btn mx-3 my-3 btn-danger">Remove Extra Space </button>

            </div>
            <div className="container" style={{color:prop.mode==='light'?'black':'white'}}>
                <h1 >Text summary</h1>
                <p className="my-3 border ">{text.split(" ").length} words {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes to read it </p>
                <h2>Preview</h2>
                <p>{text>0?text:"Enter the text to preview here"}</p>

            </div>

        </>
    )
}
