import React from 'react'

export default function Options({question,dispatch, answer}) {
    const hasAnswered = answer !== null;
  
    return (
    <div>
         <div className="options">
        {question.options.map((option, index) => 
          <button className= {`btn btn-option ${answer === index ? 'answer' : "" }
          ${ hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`}
          onClick= {() => dispatch({type: 'newAnswer', payload: index})}
            key = {option}
            disabled = {hasAnswered}
          >
            {option}
          </button>
        )}
      </div>
    </div>
  )
}
