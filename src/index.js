import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { DAppProvider} from '@usedapp/core'

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  readOnlyChainId: 31337,
  readOnlyUrls: {
    31337: 'http://127.0.0.1:8545',
  },
}

root.render(
  <DAppProvider config={config}>
      <App />
  </DAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

