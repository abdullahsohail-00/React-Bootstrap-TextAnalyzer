import React from 'react'
import { useState } from 'react';

function Form(props) {
    const [text, setText] = useState('')
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");

    const Change = () => {
        setText(text.toUpperCase());
    }
    const Change2 = () => {
        setText(text.toLowerCase());
    }
    const Change3 = () => {
        setText(' ');
    }
    const Change4 = (word) => {
        const lower = text.toLowerCase();
        setText(text.charAt().toUpperCase() + lower.slice(1));
    }
    const handle = (event) => {
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handlefindChange = (event) => {
        findWord(event.target.value);
    };
    const handleReplaceChange = (event) => {
        console.log(replaceWord(event.target.value));
    };
    const handleReplaceClick = () => {
        let newText = text.replaceAll(fWord, rWord);
        setText(newText);
    };
    return (
        <>
            <div className="container">
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3 my-3">
                    <label for="Text" className="form-label">Write the text Below</label>
                    <textarea className="form-control" onChange={handle} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="mb-3 my-3">
                    <label for="Text" className="form-label">Find word and Replace it</label>
                    <textarea className="form-control" onChange={handlefindChange} value={fWord} id="exampleFormControlTextarea1" rows="2"></textarea>
                    <textarea className="form-control" onChange={handleReplaceChange} value={rWord} id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <button type="button" onClick={Change} class="btn btn-primary">Change to UpperCase</button>
                <button type="button" onClick={Change2} class="btn btn-primary mx-3">Change to LowerCase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button type="submit" onClick={Change3} className="btn btn-warning mx-2 my-2">Clear</button>
                <button type="submit" onClick={Change4} className="btn btn-warning mx-2 my-2">Capitalize</button>
                <button type="submit" onClick={handleReplaceClick} className="btn btn-warning mx-2 my-2">Replace</button>


            </div>
            <div className="container my-4">
                <h1>
                    Text Summary
                </h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read </p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Form;
