import { useCall} from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Contract Address
import contractAddresses from "../data/contractAddresses.json"
// ABI
import MinipoolManagerABI from "../abi/contract/MinipoolManager.sol/MinipoolManager.json"

function useMinipoolStats(func) {
    const MinipoolManagerInterface = new utils.Interface(
      MinipoolManagerABI.abi
    );
    const { value, error } =
      useCall(
        func && {
            contract: new Contract(contractAddresses["MinipoolManager"], MinipoolManagerInterface), // instance of called contract
            method: func, // Method to be called
            args: [], // Method arguments - address to be checked for balance
          }
      ) ?? {};
    if(error) {
      console.error(error.message)
      return undefined
    }
    return value?.[0]
}

function MinipoolManager() {
  // MinipoolManager.sol Stats
  const minipoolCount = useMinipoolStats("getMinipoolCount");

  return (
    <Card sx={{ maxWidth: 200 }} style={{textAlign: 'center', margin: '10px'}}>
    <CardContent>
      <Typography variant="h5" component="div"><b>#</b> of minipools:</Typography>
      {minipoolCount && <Typography variant="h6" component="div">{minipoolCount.toNumber()}</Typography>}
    </CardContent>
  </Card>
  );
}

export default MinipoolManager;