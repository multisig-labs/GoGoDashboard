import './App.css';
import VaultBalances from './components/VaultBalances';
import Oracle from "./components/Oracle"
import TokenggAvax from "./components/TokenggAvax";
import MinipoolManager from './components/MinipoolManager';

import cloud from './cloud.svg'
import mountains from './mountains.svg'
import balloonyellow from './balloon-yellow.svg'

function App() {
  return (
    <div className="header-bg">
      <div className="App-header"></div>
      <div className="App-body">
        <img src={cloud} className="cloud" width="200px"></img>
        <img src={mountains} className="mountains"></img>
        <img src={balloonyellow} className="balloon-yellow"></img>
        <div className="Body-content">
          <div className="table">
            <TokenggAvax/>
          </div>
          <div className="cards">
          <VaultBalances className="card-1" />
          <Oracle className="card-2"/>
          <MinipoolManager className="card-3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
