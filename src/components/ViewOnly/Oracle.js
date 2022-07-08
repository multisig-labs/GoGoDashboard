import { formatEther } from "@ethersproject/units";
import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import oracleABI from "../../abi/contract/Oracle.sol/Oracle.json";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function useOracleStats(func) {
  const OracleInterface = new utils.Interface(oracleABI.abi);
  const { value, error } =
    useCall(
      func && {
        contract: new Contract(contractAddresses["Oracle"], OracleInterface), // instance of called contract
        method: func, // Method to be called
        args: [], // Method arguments - address to be checked for balance
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}

function Oracle() {
  // Oracle.sol Stats
  const GGPPrice = useOracleStats("getGGPPrice");

  return (
    <Card
      sx={{ boxShadow: 10 }}
      style={{
        width: "200px",
        height: "125px",
        marginTop: 20,
        border: "solid",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          GGP <img width="20px" height="20px" src={ggplogo} /> Price:
        </Typography>
        {GGPPrice && (
          <Typography variant="h6" component="div">
            <b>$</b> {formatEther(GGPPrice)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Oracle;
