import { useState } from "react";
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Private Keys
import privateKeys from "../../data/pk.json";

import { nodeID } from "./utils/utils.js";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

function Minipool(props) {
  const [avaxamt, setAvaxAmt] = useState("");
  const [ggpamt, setGgpAmt] = useState("");
  const [dur, setDur] = useState("");
  let w = new ethers.Wallet(
    privateKeys[props.value],
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );
  let node = nodeID(props.value);
  let delegationFee = 0;
  const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
  const minipoolContract = new Contract(
    contractAddresses["MinipoolManager"],
    minipoolInterface
  );

  const { state: state1, send: create } = useContractFunction(
    minipoolContract,
    "createMinipool",
    { signer: w }
  );
  const { state: state2, send: destroy } = useContractFunction(
    minipoolContract,
    "withdrawMinipoolFunds",
    { signer: w }
  );
  const { status } = state1;

  const makePool = () => {
    void create(
      node,
      parseInt(dur * 86400),
      delegationFee,
      utils.parseEther(ggpamt),
      {
        value: utils.parseEther(avaxamt.toString()),
      }
    );
  };
  const withdrawPool = () => {
    void destroy(node, {});
  };

  return (
    <div>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="AVAX Amt"
          variant="outlined"
          style={{ marginLeft: "10px", marginRight: "10px" }}
          value={avaxamt}
          onChange={(e) => setAvaxAmt(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="GGP Bond"
          variant="outlined"
          style={{ marginLeft: "10px", marginRight: "10px" }}
          value={ggpamt}
          onChange={(e) => setGgpAmt(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Duration (Days)"
          variant="outlined"
          style={{ marginLeft: "10px", marginRight: "10px" }}
          value={dur}
          onChange={(e) => setDur(e.target.value)}
        />
        <ButtonGroup style={{marginLeft: "10px", marginRight: "10px",justifyContent:"center"}} variant="outlined">
          <Button onClick={() => makePool()}>Create Minipool</Button>
        </ButtonGroup>

        <ButtonGroup style={{marginLeft: "10px", marginRight: "10px", justifyContent:"center"}} variant="outlined">
          <Button onClick={() => withdrawPool()}>Withdraw Funds</Button>
        </ButtonGroup>
      </FormGroup>
    </div>
  );
}

export default Minipool;
