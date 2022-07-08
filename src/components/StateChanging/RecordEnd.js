import { useState } from "react";
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Utils
import { calcDuration, calcReward, nodeID } from "./utils/utils.js";
// Accounts
import accounts from "../../data/anrAccounts.json";
// List nodes
import { listNodes } from "./utils/listNodes.js";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

function RecordEnd(props) {
  const [reward, setReward] = useState("");
  let w = new ethers.Wallet(
    accounts[props.name].pk,
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

  const nodeOps = listNodes(accounts);

  const recordEnd = (node) => {
    const duration = calcDuration(node);
    const avax = calcReward(node, 300);
    if (avax !== 0) {
      void send(nodeID(node), duration, ethers.utils.parseEther("300"), {
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
        {nodeOps.map((n) => (
          <Button onClick={() => recordEnd(n)}>Claim {n}</Button>
        ))}
      </ButtonGroup>
      {status}
    </FormGroup>
  );
}

export default RecordEnd;
