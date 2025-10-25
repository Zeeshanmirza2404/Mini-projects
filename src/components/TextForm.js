import {useState} from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

     const handleloclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclrclick = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleonchange = (event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState("");

return (
    <>
    <div>
            <div className="mb-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'  }} placeholder="Enter text here" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button
                className="btn mx-2"
                style={{
                    backgroundColor: props.mode === 'dark' ? '#003d88ff' : '#0d6efd',
                    color: 'white',
                    border: 'none'
                }}
                onClick={handleupclick}
            >
                Convert to Uppercase
            </button>
            <button
                className="btn mx-2"
                style={{
                    backgroundColor: props.mode === 'dark' ? '#003d88ff' : '#0d6efd',
                    color: 'white',
                    border: 'none'
                }}
                onClick={handleloclick}
            >
                Convert to Lowercase
            </button>
            <button
                className="btn mx-2"
                style={{
                    backgroundColor: props.mode === 'dark' ? '#003d88ff' : '#0d6efd',
                    color: 'white',
                    border: 'none'
                }}
                onClick={handleclrclick}
            >
                Clear Text
            </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word.length !== 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter(word => word.length !== 0).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
    </>
)
}
