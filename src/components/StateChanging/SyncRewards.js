import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import TokenggAVAXABI from "../../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json";
// Accounts
import accounts from "../../data/anrAccounts.json";
// Utils
import { calcDuration, calcReward } from "./utils/utils.js";

import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";

function SyncRewards(props) {
  let w = new ethers.Wallet(
    accounts[props.name].pk,
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );

  const ggAVAXInterface = new utils.Interface(TokenggAVAXABI.abi);
  const ggAVAXContract = new Contract(
    contractAddresses["TokenggAVAX"],
    ggAVAXInterface
  );

  const { state, send } = useContractFunction(ggAVAXContract, "syncRewards", {
    signer: w,
  });
  const { status } = state;

  const sync = () => {
    void send();
  };

  return (
    <FormGroup>
      <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
        <Button onClick={() => sync()}>Sync Rewards</Button>
      </ButtonGroup>
      {status}
    </FormGroup>
  );
}

export default SyncRewards;
