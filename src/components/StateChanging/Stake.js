import { useState} from 'react' 
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";
import { formatEther } from "@ethersproject/units";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
import privateKeys from "../../data/pk.json";
// ABI
import ggAvaxABI from "../../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json";

import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';


function Stake(props) {
  const [amt, setAmt] = useState('') 
  const ggAvaxInterface = new utils.Interface(ggAvaxABI.abi);
  const ggAvaxContract = new Contract(
    contractAddresses["TokenggAVAX"],
    ggAvaxInterface
  );

  let w = new ethers.Wallet(
    privateKeys[props.value],
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );

  const { state: stakeState, send: stake } = useContractFunction(
    ggAvaxContract,
    "depositAVAX",
    { signer: w }
  );
  const {
    state: unstakeState,
    send: unstake,
  } = useContractFunction(ggAvaxContract, "redeemAVAX", { signer: w });

  const stakeAVAX = () => {
    void stake({ value: ethers.utils.parseEther(amt, "ether"), gasPrice: 18000000,
    gasLimit: 3000000});
  };
  const redeemggAVAX = () => {
    void unstake(ethers.utils.parseEther(amt.toString(),"ethers"),{});
  };

  return (
    <div>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Stake/Redeem AVAX"
          variant="outlined"
          value={amt} 
          onChange={(e) => setAmt(e.target.value)} 
        />
        <ButtonGroup style={{ padding: "0px" }} variant="outlined" fullWidth>
          <Button onClick={() => stakeAVAX()}>Stake</Button>
          <Button onClick={() => redeemggAVAX()}>Unstake</Button>
        </ButtonGroup>
      </FormGroup>
    </div>
  );
}

export default Stake;
