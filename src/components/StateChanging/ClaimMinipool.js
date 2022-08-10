import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Accounts
import accounts from "../../data/anrAccounts.json";

import { listNodes } from "./utils/listNodes.js";

import { nodeID } from "./utils/utils.js";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";

function ClaimMinipool(props) {
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
    "claimAndInitiateStaking",
    { signer: w }
  );
  const { status } = state;

  const nodeOps = listNodes(accounts);

  const claimPool = (node) => {
    void send(nodeID(node), {});
  };

  return (
    <div>
      <FormGroup>
        <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
          {nodeOps.map((n) => (
            <Button onClick={() => claimPool(n)}>Claim: {n}</Button>
          ))}
        </ButtonGroup>
        {status}
      </FormGroup>
    </div>
  );
}

export default ClaimMinipool;
