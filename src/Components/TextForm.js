import React, { useState } from 'react'


export default function TextForm(prop) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("hello the button is click");
        setText("hello this is  set text")
        let uptext = text.toUpperCase();
        setText(uptext)
        prop.showAlert("Text has been converted into upperCase", "success")

    }

    const handleloClick = (v) => {
        let locase = text
        setText(locase.toLowerCase());
        prop.showAlert("Text has been converted into LowerCase", "success")
    }

    const handleOnchange = (v) => {
        console.log("handle on change");
        setText(v.target.value)


    }
    const handleToClear = (v) => {
        v = ""
        setText(v)
    }
    const textToSpeech = () => {
        const Speech = new SpeechSynthesisUtterance();
        const message = document.getElementById('textBox').value
        Speech.lang = 'eng';
        Speech.text = message
        window.speechSynthesis.speak(Speech)

    }
    const copyHandler = () => {
        let text = document.getElementById('textBox')
        text.select()
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text.value)
        prop.showAlert("Text has been copy to clipbord", "success")
    }
    const ExtraSpaceRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        prop.showAlert("Extra spaces removed from text", "success")
    }



    return (
        <>
            <div className="mb-3 my-3 container ">
                <h3 className=' mb-0 ' style={{ color: prop.mode === 'light' ? 'black' : 'white' }}  >{prop.heading} </h3>
                <label htmlFor="textBox" className="form-label"></label>
                <textarea type="text" id="textBox" onChange={handleOnchange} value={text} style={{ backgroundColor: prop.mode === 'light' ? 'white' : '#4271b7', color: prop.mode === 'light' ? 'black' : 'white' }} rows="8" className="form-control border border-dark mb-3 " placeholder="" />

                <button disabled={text.length===0} onClick={handleUpClick} style={{border:'solid 2px pink'}} className="btn mx-1 my-1 shadow shadow-sm btn-dark">Conver To Uppercase</button>
                <button disabled={text.length===0} onClick={handleToClear} style={{border:'solid 2px pink'}} className="btn mx-1 my-1 shadow shadow-sm  btn-dark">Clear Text</button>
                <button disabled={text.length===0} onClick={textToSpeech} style={{border:'solid 2px pink'}} className="btn mx-1 my-1 shadow shadow-sm btn-dark">Speak</button>
                <button disabled={text.length===0} onClick={handleloClick} style={{border:'solid 2px pink'}} className="btn mx-1 my-1 shadow shadow-sm btn-dark">Conver To Lovercase</button>
                <button disabled={text.length===0} onClick={copyHandler} style={{border:'solid 2px pink'}} className="btn mx-1 my-1 shadow shadow-sm btn-dark">Copy Text</button>
                <button disabled={text.length===0} onClick={ExtraSpaceRemove} style={{border:'solid 2px pink'}} className="btn mx-1 shadow shadow-sm my-1 btn-dark">Remove Extra Space </button>

            </div>
            <div className="container" style={{ color: prop.mode === 'light' ? 'black' : 'white' }}>
                <h1 >Text summary</h1>
                <p className="my-3 border ">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {text.length}</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read it </p>
                <h2>Preview</h2>
                <p>{text > 0 ? text : "Nothing to preview!"}</p>

            </div>

        </>
    )
}
