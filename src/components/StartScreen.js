import React from 'react'

export default function StartScreen({numQuest, dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuest} question to test your React mastery</h3>
        <button 
          className='btn btn-ui' 
          onClick={() => dispatch({type: "start"})}>
          Let's Start 
        </button>
    </div>
  );
}
