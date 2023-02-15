import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Formulaire from './components/Formulaire.jsx'

const App = () => {

  return (
    <div>
     <Formulaire  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


