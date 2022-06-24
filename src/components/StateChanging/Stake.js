import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
import privateKeys from "../../data/pk.json";
// ABI
import ggAvaxABI from "../../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json";

import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';


function Stake(props) {
  const ggAvaxInterface = new utils.Interface(ggAvaxABI.abi);
  const ggAvaxContract = new Contract(
    contractAddresses["TokenggAVAX"],
    ggAvaxInterface
  );

  let w = new ethers.Wallet(
    privateKeys[props.value],
    ethers.getDefaultProvider("http://localhost:8545")
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
    void stake({ value: ethers.utils.parseEther("2000") });
  };
  const redeemggAVAX = () => {
    void unstake({ value: utils.parseEther("8000") });
  };

  return (
    <div>
      <FormGroup>
      <TextField id="outlined-basic" label="Stake/Redeem AVAX" variant="outlined" />
      <ButtonGroup variant="outlined" fullWidth="true">
      <Button onClick={() => stakeAVAX()}>Stake</Button>
      <Button onClick={() => redeemggAVAX()}>Unstake</Button>
      </ButtonGroup>
      </FormGroup>
    </div>
  );
}

export default Stake;
