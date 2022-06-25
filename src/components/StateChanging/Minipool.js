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
  const [amt,setAmt] = useState("")
  let w = new ethers.Wallet(
    privateKeys[props.value],
    ethers.getDefaultProvider("http://localhost:8545")
  );
  let node = nodeID(props.value);
  let duration = 1209600; //14 Days
  let delegationFee = 0;
  let ggpBondAmt = utils.parseEther("200");
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
      duration,
      delegationFee,
      ggpBondAmt,
      {
        value: utils.parseEther(amt.toString()),
        gasPrice: 18000000,
        gasLimit: 3000000,
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
          label="AVAX amt"
          variant="outlined"
          style={{marginLeft:"10px",marginRight:"10px"}}
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />
        <ButtonGroup style={{}} variant="outlined" >
          <Button onClick={() => makePool()}>Create Minipool</Button>
          <Button onClick={() => withdrawPool()}>Withdraw Funds</Button>
        </ButtonGroup>
      </FormGroup>
    </div>
  );
}

export default Minipool;
