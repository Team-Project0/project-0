// import React, { Fragment } from "react";
// import { Route, Switch } from "react-router-dom";
// import Tabuser from "../components/Tabuser.jsx";


// const Routes = () => {
//   return (
//     <Fragment>
//       <Switch>
//         <Route path="/Tabuser" component={Tabuser} exact />
       
//       </Switch>
//     </Fragment>
//   );
// };

// export default Routes;
// import  React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import Tabuser from "../components/Tabuser.jsx";
// const root = createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//   <Route exact path='/Tabuser' element={<Tabuser/>}/>  

//   </BrowserRouter>
// );
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// import AllPosts from "../components/AllPosts";
// import CreatePost from "../components/CreatePost";
// import OnePost from "../components/OnePost";
import Login from "../components/login.jsx";
import Formulaire from "../components/Formulaire.jsx"
import Tabuser from "../components/Tabuser.jsx"
const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/singup" component={Formulaire} exact />
        <Route path="/posts" component={AllPosts} exact />
        {/* 
        <Route path="/posts/:postId" component={OnePost} exact /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;