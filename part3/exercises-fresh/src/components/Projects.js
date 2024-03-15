import React, { useState } from 'react'
import data from "./../data.json"

function MyProjects() {

    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h3>{data.projects[index].canvas}</h3>
            <p><strong>Designer:</strong> {data.projects[index].designer}</p>
            <img src={data.projects[index].photoUrl} alt={data.projects[index].alt} style={{ maxWidth: "400px" }}/>
        </div>
    );
}

export default MyProjects;