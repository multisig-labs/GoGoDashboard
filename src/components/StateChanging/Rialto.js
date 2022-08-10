import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ClaimMinipool from "./ClaimMinipool";
import RecordStart from "./RecordStart";
import RecordEnd from "./RecordEnd";
import SyncRewards from "./SyncRewards";
import SetGGPPrice from "./SetGGPPrice";

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// Actor Addresses
import accounts from "../../data/anrAccounts.json";

// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function Rialto(props) {
  // Rialto Balances
  const rialtoAVAX = useEtherBalance(accounts[props.name].addr);
  const rialtoggAVAX = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts[props.name].addr
  );
  const rialtoGGP = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts[props.name].addr
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
            {props.name}:
          </Typography>
          {rialtoAVAX && (
            <Typography variant="h6" component="div">
              {Math.round(formatEther(rialtoAVAX))}{" "}
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {rialtoggAVAX && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(rialtoggAVAX))}{" "}
              <img width="20px" height="20px" src={gogoballoon} alt="gg" />
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {rialtoGGP && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(rialtoGGP))}{" "}
              <img width="20px" height="20px" src={ggplogo} alt="GGP" />
            </Typography>
          )}
          <ClaimMinipool name={props.name} />
          <RecordStart name={props.name} />
          <RecordEnd name={props.name} />
          <SyncRewards name={props.name} />
          <SetGGPPrice />
        </CardContent>
      </Card>
    </>
  );
}

export default Rialto;
