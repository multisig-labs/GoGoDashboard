import '../App.css';
import VaultBalances from '../components/ViewOnly/VaultBalances';
import Oracle from "../components/ViewOnly/Oracle"
import TokenggAvax from "../components/ViewOnly/TokenggAvax";
import MinipoolManager from '../components/ViewOnly/MinipoolManager';

import cloud from '../assets/cloud.svg'
import mountains from '../assets/mountains.svg'
import balloonyellow from '../assets/balloon-yellow.svg'

function Test() {
  return (
    <div className="header-bg">
      <div className="App-header"></div>
      <div className="App-body">
        <img src={cloud} className="cloud" width="300px"></img>
        <img src={mountains} className="mountains"></img>
        <img src={balloonyellow} className="balloon-yellow"></img>
        <div className="Body-content">
          <div className="sections">
          <div className="cards">
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;