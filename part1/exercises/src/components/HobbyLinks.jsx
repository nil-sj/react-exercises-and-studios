import React from 'react'

export default function HobbyLinks() {
    let hobbyLinks = ['https://shopwwmm.com/', 'https://www.instructables.com/'];
  return (
    <div>
        <h3>Hobby List</h3>
        <a href={hobbyLinks[0]} style={{backgroundColor: 'lightBlue', lineHeight: '200%'}}>Wood Working for Mere Mortals</a>
        <br/>
        <a href={hobbyLinks[1]} style={{backgroundColor: 'lightBlue', lineHeight: '200%'}}>Instructables</a>
    </div>
  );
}

