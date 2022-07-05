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
// Utils
import { calcDuration, calcReward, nodeID } from "./utils/utils.js";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

function RecordEnd(props) {
  const [reward, setReward] = useState("");
  let w = new ethers.Wallet(
    privateKeys[props.value],
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );
  const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
  const minipoolContract = new Contract(
    contractAddresses["MinipoolManager"],
    minipoolInterface
  );

  const { state, send } = useContractFunction(
    minipoolContract,
    "recordStakingEnd",
    { signer: w }
  );
  const { status } = state;

  const recordEnd_1 = () => {
    const duration = calcDuration("NODEOP1");
    const avax = calcReward("NODEOP1", 300);
    if (avax !== 0) {
      void send(nodeID("NODEOP1"), duration, ethers.utils.parseEther("300"), {
        value: avax,
        gasPrice: 18000000,
        gasLimit: 3000000,
      });
    }
  };
  const recordEnd_2 = () => {
    const duration = calcDuration("NODEOP2");
    const avax = calcReward("NODEOP2", parseInt(reward));
    if (avax !== 0) {
      void send(nodeID("NODEOP2"), duration, ethers.utils.parseEther(reward), {
        value: avax,
        gasPrice: 18000000,
        gasLimit: 3000000,
      });
    }
  };

  return (
    <FormGroup>
      <TextField
        id="outlined-basic"
        label="NodeOp Reward Amt"
        variant="outlined"
        value={reward}
        onChange={(e) => setReward(e.target.value)}
      />
      <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
        <Button onClick={() => recordEnd_1()}>
          Record Staking End (NodeOp1)
        </Button>
        <Button onClick={() => recordEnd_2()}>
          Record Staking End (NodeOp2)
        </Button>
      </ButtonGroup>
      {status}
    </FormGroup>
  );
}

export default RecordEnd;
