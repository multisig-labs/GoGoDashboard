import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import ClaimMinipool from "./ClaimMinipool";
import RecordStart from "./RecordStart";
import RecordEnd from "./RecordEnd";
import SyncRewards from "./SyncRewards";
import SetGGPPrice from "./SetGGPPrice";


// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// Actor Addresses
import accounts from "../../data/accounts.json";

// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";


function Rialto() {
  // Actor 0 Balances
  const actorAVAX_0 = useEtherBalance(accounts["RIALTO"]);
  const actorggAVAX_0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["RIALTO"]
  );
  const actorGGP_0 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["RIALTO"]
  );

  return (
    <>
      <Card
        className="card"
        sx={{ boxShadow: 10 }}
        style={{
          width: "500px",
          height: "fit-content",
          border: "solid",
          justifyContent: "center",
          margin: "5%",
        }}
      >
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            variant="h5"
            component="div"
          >
            Rialto:
          </Typography>
          {actorAVAX_0 && (
            <Typography variant="h6" component="div">
              {Math.round(formatEther(actorAVAX_0))}{" "}
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {actorggAVAX_0 && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(actorggAVAX_0))}{" "}
              <img width="20px" height="20px" src={gogoballoon} alt="gg" />
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {actorGGP_0 && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(actorGGP_0))}{" "}
              <img width="20px" height="20px" src={ggplogo} alt="GGP" />
            </Typography>
          )}
          <ClaimMinipool value="RIALTO" />
          <RecordStart value="RIALTO" />
          <RecordEnd value="RIALTO" />
          <SyncRewards value="RIALTO" />
          <SetGGPPrice/>
        </CardContent>
      </Card>
    </>
  );
}

export default Rialto;
