import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

import { DAppProvider } from "@usedapp/core";
import { ethers } from "ethers";

const config = {
  readOnlyChainId: 31337,
  readOnlyUrls: {
    31337: process.env.REACT_APP_ETH_RPC_URL,
  },
};

function App() {
const provider = ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL, {});
  return (
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
}

export default App;
