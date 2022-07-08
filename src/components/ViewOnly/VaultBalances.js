import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function VaultBalances() {
  // Contracts
  const vaultAVAX = useEtherBalance(contractAddresses["Vault"]);
  const vaultGGP = useTokenBalance(
    contractAddresses["TokenGGP"],
    contractAddresses["Vault"]
  );

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
          Vault:
        </Typography>
        {vaultAVAX && (
          <Typography variant="h6" component="div">
            {formatEther(vaultAVAX)}{" "}
            <img width="20px" height="20px" src={avaxlogo} />
          </Typography>
        )}
        {vaultGGP && (
          <Typography variant="h6" component="div">
            {formatEther(vaultGGP)}{" "}
            <img width="20px" height="20px" src={ggplogo} />
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default VaultBalances;
