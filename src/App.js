import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

import { DAppProvider, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";

import { AnrChain } from "./Anr";

const config = {
  readOnlyChainId: AnrChain.chainId,
  readOnlyUrls: {
    [AnrChain.chainId]: AnrChain.rpcUrl,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, AnrChain],
};

function App() {

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
