import React from 'react'
import { deepPurple } from '@mui/material/colors';
import { GlobalStyles } from '@mui/styled-engine';

import { ImageList} from '@mui/material';
import { sizing } from '@mui/system';
const color = deepPurple[400];
const Login = () => {
    return (
        <div>
            {/* <GlobalStyles
                styles={{ body: { background: color } }}
               
            /> */}
             <img class="logo"src="https://www.milka.com/etc.clientlibs/mdlz-common/clientlibs/clientlib-milka-redesign/resources/static/images/milka-logo.png" alt="h"
            // style={{ width:'10%', height:"10%" }}
            />
          <div class="grid-container">
  
  <div class="item3">Main</div>  
  <div class="item4"> <img class="rotation" src="https://www.milka.com/content/dam/mondelezwoop/milka/milka-chocolate.png" />
           </div>
  </div>
 
         
        </div>
    )
}

export default Login
