import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import reportWebVitals from "./reportWebVitals";

import { Localhost, DAppProvider} from '@usedapp/core'

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  readOnlyChainId: 31337,
  readOnlyUrls: {
    31337: 'http://127.0.0.1:8545',
  },
}

root.render(
  <DAppProvider config={config}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

