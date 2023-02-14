import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Formulaire from './components/Formulaire.jsx'
import { Box } from '@material-ui/core'


const App = () => {

  return (
    <div >
      <Box 
        display="flex" 
        width={500} height={80} 
        alignItems="center"
        justifyContent="center"
        >
          <Formulaire   />
      </Box>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
