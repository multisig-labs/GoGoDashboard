import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Utils
import { now, nodeID } from "./utils/utils.js";
// Accounts
import accounts from "../../data/anrAccounts.json";
// List nodes
import { listNodes } from "./utils/listNodes.js";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";

function RecordStart(props) {
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
    "recordStakingStart",
    { signer: w }
  );
  const { status } = state;

  const nodeOps = listNodes(accounts);

  const recordStart = (node) => {
    void send(nodeID(node), now(), {});
  };

  return (
    <FormGroup>
      <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
        {nodeOps.map((n) => (
          <Button onClick={() => recordStart(n)}>Claim {n}</Button>
        ))}
      </ButtonGroup>
      {status}
    </FormGroup>
  );
}

export default RecordStart;
