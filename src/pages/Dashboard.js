import VaultBalances from "../components/ViewOnly/VaultBalances";
import Oracle from "../components/ViewOnly/Oracle";
import TokenggAvax from "../components/ViewOnly/TokenggAvax";
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
      <div className="Rpc-url">
        <b>RPC-URL:</b> {process.env.REACT_APP_ETH_RPC_URL}
      </div>
      <div className="App-body">
        <img src={cloud} className="cloud" width="300px" alt=""></img>
        <img src={mountains} className="mountains" alt=""></img>
        <img src={balloonyellow} className="balloon-yellow" alt=""></img>
        <div className="Body-content">
          <div className="sections">
          <MinipoolLog />
          </div>
          <div className="sections">
            <TokenggAvax />
            <div className="cards">
              <VaultBalances className="card-1" />
              <Oracle className="card-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
