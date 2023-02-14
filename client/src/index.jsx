import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Formulaire from './components/Formulaire.jsx'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  return (
    <div>
     <Formulaire  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
