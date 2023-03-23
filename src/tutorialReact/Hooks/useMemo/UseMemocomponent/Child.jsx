import React from 'react'

function Child() {
    console.log('child is rendered');
    
  return (
    <div>
      <h1>I am child</h1>
    </div>
  )
}

export default React.memo(Child)
