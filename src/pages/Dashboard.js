import VaultBalances from "../components/ViewOnly/VaultBalances";
import Oracle from "../components/ViewOnly/Oracle";
import TokenggAvax from "../components/ViewOnly/TokenggAvax";
import MinipoolManager from "../components/ViewOnly/MinipoolManager";
import MinipoolLog from "../components/ViewOnly/MinipoolLog";

import cloud from "../assets/cloud.svg";
import mountains from "../assets/mountains.svg";
import balloonyellow from "../assets/balloon-yellow.svg";

import "../styles/Background.css";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="header-bg">
      <div className="App-header"></div>
      <div className="Dashboard-title"><b>DASHBOARD</b></div>
      <div className="Rpc-url"><b>RPC-URL:</b> {process.env.REACT_APP_ETH_RPC_URL}</div>
      <div className="App-body">
        <img src={cloud} className="cloud" width="300px"></img>
        <img src={mountains} className="mountains"></img>
        <img src={balloonyellow} className="balloon-yellow"></img>
        <div className="Body-content">
          <div className="sections">
            <MinipoolLog/>
            <TokenggAvax />
            <div className="cards">
              <VaultBalances className="card-1" />
              <Oracle className="card-2" />
              <MinipoolManager className="card-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
