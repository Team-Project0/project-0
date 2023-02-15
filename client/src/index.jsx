
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
// import $ from 'jquery'
// import List from './components/List.jsx'
// import Login from './components/login.jsx'
// const App = () => {
//   const [items, setItems] = useState([])
//   useEffect(() => {
//     $.ajax({
//       url: '/api/items',
//       success: (data) => {
//         console.log(data)
//         setItems(data)
//       },
//       error: (err) => {
//         console.log('err', err)
//       },
//     })
//   }, [])

//   return (
//     <div>
//       <h1>Item List</h1>
//       {/* <List items={items} /> */}
//       <Login/>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'))

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Formulaire from './components/Formulaire.jsx'

const App = () => {


import React, { useState } from "react";
import ReactDOM from "react-dom";

import Login from "./components/login.jsx";
import List from "./components/List.jsx"
/*
  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 
  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component
  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` function component, 
  determining what view gets rendered "by default".
  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'home'
  - If the view is set to 'pokedex', the `<Pokedex>` component is displayed
  - If the view is set to any other value, the `<Pokedetails>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.
  You'll make some refactors and additions to this view switcher throughout the
  assessment. When you're ready, return to the README.
*/
const App = () => {
  const [view, setView] = useState('pokedex')
  const changeView = (option) => {
    setView(option)
  }
  const renderView = () => {
    if (view === "pokedex") {
      return <Login />;
    } else if(view === "pokedexx") {
      return <List/>;
    }
  }
  return (
    <div>

      <Login/>
      {/* <div className="nav">
        <span className="logo"
          onClick={() => changeView('pokedex')}>
          PokeMongoDB
        </span>
        <span className={view === 'pokedexx'
          ? 'nav-selected'
          : 'nav-unselected'}
          onClick={() => changeView('pokedexx')}>
          See all Pokemons
        </span>
      </div>

      <div className="main">
        {renderView()}
      </div> */}

     <Formulaire  />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));
