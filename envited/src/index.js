import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router , Route, Routes } from "react-router-dom";
import './index.css';
import EnvitedHome from './EnvitedHome';
import EnvitedCreate from './EnvitedCreate';
import EnvitedEvent from './EnvitedEvent';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EnvitedHome />} />
      <Route path="/event" element={<EnvitedEvent />} />
      <Route path="/create" element={<EnvitedCreate />} />
    </Routes>
  </BrowserRouter>
);



