import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

import { DAppProvider, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";
import { ethers } from "ethers";

import { getAddrs } from "./components/StateChanging/utils/getContractAddresses";
import { AnrChain } from "./Anr";

const config = {
  readOnlyChainId: AnrChain.chainId,
  readOnlyUrls: {
    [AnrChain.chainId]: AnrChain.rpcUrl,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, AnrChain],
};

function App() {
const provider = ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL, {});
// useEffect(() => {
//     //Runs only on the first render
//     getAddrs();
//   }, []);
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
