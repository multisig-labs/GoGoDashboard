import './App.css';

import VaultBalances from './components/ViewOnly/VaultBalances';
import Oracle from "./components/ViewOnly/Oracle"
import TokenggAvax from "./components/ViewOnly/TokenggAvax";
import MinipoolManager from './components/ViewOnly/MinipoolManager';

import LiquidStakers from './components/StateChanging/LiquidStakers';

import cloud from './assets/cloud.svg'
import mountains from './assets/mountains.svg'
import balloonyellow from './assets/balloon-yellow.svg'

function App() {
  return (
    <div className="header-bg">
      <div className="App-header"></div>
      <div className="App-body">
        <img src={cloud} alt="Cloud" className="cloud" width="300px"></img>
        <img src={mountains} alt="Mountains" className="mountains"></img>
        <img src={balloonyellow} alt="Balloon" className="balloon-yellow"></img>
        <div className="Body-content">
          <div className="table">
            <TokenggAvax/>
          </div>
          <div className="cards">
          <VaultBalances className="card-1" />
          <Oracle className="card-2"/>
          <MinipoolManager className="card-3"/>
          <LiquidStakers/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
