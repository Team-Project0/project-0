
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
import Formulaire from './components/Formulaire.jsx';

import Login from "./components/login.jsx";
import List from "./components/List.jsx"


const App = () => {
  // const [view, setView] = useState('login')
  // const changeView = (option) => {
  //   setView(option)
  // }
  // const renderView = () => {
  //   if (view === "login") {
  //     return <Login />;
  //   } else if(view === "Tabuser") {
  //     return <Tabuser/>;
  //   }
  // }
  return (
    <div>


      {/* <Login/> */}

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

      </div> 
     */} 

    </div>
  )
}




ReactDOM.render(<App />, document.getElementById("app"));
