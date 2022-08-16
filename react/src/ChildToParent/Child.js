import React from 'react'

// function Child(props) {
function Child({ handleButtonClicked }) {

  return (
    <div>
//       <button onClick={() => props.handleButtonClicked()}>Submit</button>
      <button onClick={() => handleButtonClicked()}>Submit</button>
    </div>
  )
}

export default Child
