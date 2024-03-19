import React from 'react';
import logo from './logo.svg';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";

import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
   return (
      <div>

      <HashRouter>
      <Routes>
          <Route path="/"         element={ <Navigate to="/Labs/a3"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
        </HashRouter>
      </div>
   );
}
export default App
