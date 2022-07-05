import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../../data/pk.json"

import { nodeID } from "./utils/utils.js"
import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';

function ClaimMinipool(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL));
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'claimAndInitiateStaking', { signer:w })
    const { status } = state

    const claimPool_1 = () => {
      void send(nodeID("NODEOP1"),{})
    }
    const claimPool_2 = () => {
      void send(nodeID("NODEOP2"),{})
    }

    return (
      <div>
      <FormGroup>
        <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
          <Button onClick={() => claimPool_1()}>Claim Minipool (NodeOp1)</Button>
          <Button onClick={() => claimPool_2()}>Claim Minipool (NodeOp2)</Button>
        </ButtonGroup>
        {status}
      </FormGroup>
    </div>
    )
}

export default ClaimMinipool;

