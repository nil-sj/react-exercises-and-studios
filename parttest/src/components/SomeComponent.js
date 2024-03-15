import { useState } from 'react';

function SomeComponent() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    function handleClick() {
        setCount(count + 1);
    }

    function handleTextBtnClick() {
        setText(text + " ...ABC");   
    }

    return (
        <div>
            <p>Count: {count}</p>
            <br/>
            <button onClick={handleClick}>Increment Count</button>
            <hr/>
            <p>{text}</p>
            <button onClick={handleTextBtnClick}>Add "...ABC" to Text</button>
        </div>
    );
}

export default SomeComponent;