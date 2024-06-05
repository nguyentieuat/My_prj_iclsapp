import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './page/user/User';
import Admin from './page/admin/Admin';
import SlideImages from './page/admin/SlideImages';
import Content from './page/admin/Content';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<User />}>

          </Route>

          <Route path="admin/*" element={<Admin />} >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
