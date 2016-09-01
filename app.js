import React from 'react'
import ReactDOM from 'react-dom'
import web from './web-tech.svg'

const style = {
  fontFamily:"-apple-system, 'Helvetica Neue', sans-serif",
  fontWeight: 900,
  fontSize: 40,
  letterSpacing:'-.04em'
}

function App () {
  return (
    <div style={{width: 400, margin: '0 auto', textAlign: 'center'}}>
      <img src={web} style={{height: 100, width: 100, margin: '0 auto'}} alt=""/>
      <div style={style}>Moar Electron!</div>
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));
