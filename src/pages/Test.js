import "../styles/Background.css";
import "../styles/Test.css";
import LiquidStakers from "../components/StateChanging/LiquidStakers.js";
import Rialto from "../components/StateChanging/Rialto.js";
import Skip from "../components/StateChanging/Skip.js";

import cloud from "../assets/cloud.svg";
import mountains from "../assets/mountains.svg";
import balloonyellow from "../assets/balloon-yellow.svg";
import NodeOperators from "../components/StateChanging/NodeOperators";

function Test() {
  return (
    <div className="header-bg">
      <div className="App-header"></div>
      <div className="App-body">
        <img src={cloud} className="cloud" width="300px"></img>
        <img src={mountains} className="mountains"></img>
        <img src={balloonyellow} className="balloon-yellow"></img>
        <div className="Body-content">
          <div className="s">
            <div className="c">
              <LiquidStakers />
            </div>
            <div className="c">
              <NodeOperators />
            </div>
            <div className="c">
              <Rialto />
              <Skip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
