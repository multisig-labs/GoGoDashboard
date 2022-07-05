import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json"
// Private Keys
import privateKeys from "../../data/pk.json"
// Utils
import { now, nodeID } from "./utils/utils.js";

import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';


function RecordStart(props) {
    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL));
    const minipoolInterface = new utils.Interface(MinipoolManagerABI.abi);
    const minipoolContract = new Contract(contractAddresses["MinipoolManager"], minipoolInterface);

    const { state, send } = useContractFunction(minipoolContract, 'recordStakingStart', { signer:w })
    const { status } = state

    const recordStart_1 = () => {
      void send(nodeID("NODEOP1"),now(),{gasPrice: 18000000,
        gasLimit: 3000000})
    }
    const recordStart_2 = () => {
      void send(nodeID("NODEOP2"),now(),{gasPrice: 18000000,
        gasLimit: 3000000})
    }

    return (
      <FormGroup>
        <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
          <Button onClick={() => recordStart_1()}>Record Staking Start (NodeOp1)</Button>
          <Button onClick={() => recordStart_2()}>Record Staking Start (NodeOp2)</Button>
        </ButtonGroup>
        {status}
      </FormGroup>
    )
}

export default RecordStart;

