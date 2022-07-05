import { useState} from 'react' 
import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json"
// ABI
import oracleABI from "../../abi/contract/Oracle.sol/Oracle.json"

import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

function SetGGPPrice() {
    const [price, setPrice] = useState('') 
    const oracleInterface = new utils.Interface(oracleABI.abi)
    const oracleContract = new Contract(contractAddresses["Oracle"], oracleInterface)

    // Calling smart contract function setGGPPrice()
    const { state, send } = useContractFunction(oracleContract, 'setGGPPrice',{ transactionName: 'SetPrice'})
    const { status } = state

    const setGGP = () => {
      void send(ethers.utils.parseEther(price),9999)
    }

    return (
      <div>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Set GGP Price"
          variant="outlined"
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
          <Button onClick={() => setGGP()}>Set Price</Button>
        </ButtonGroup>
        {status}
      </FormGroup>
      </div>
    )
}

export default SetGGPPrice;

