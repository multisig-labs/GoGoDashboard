import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';

import Stake from "./Stake";


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

function LiquidStakers() {
  // Actor 0 Balances
  const actorAVAX_0 = useEtherBalance(accounts["ACCOUNT_0"]);
  const actorggAVAX_0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_0"]
  );
  const actorGGP_0 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_0"]
  );
  // Actor 1 Balances
  const actorAVAX_1 = useEtherBalance(accounts["ACCOUNT_1"]);
  const actorggAVAX_1 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_1"]
  );
  const actorGGP_1 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_1"]
  );
  // Actor 2 Balances
  const actorAVAX_2 = useEtherBalance(accounts["ACCOUNT_2"]);
  const actorggAVAX_2 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ACCOUNT_2"]
  );
  const actorGGP_2 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ACCOUNT_2"]
  );

  return (
      <>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width: '300px',
        height: "275px",
        marginTop: 20,
        border: "solid",
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Alice:
        </Typography><br/>
        {actorAVAX_0 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_0))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_0 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_0))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorGGP_0 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_0))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Stake value="ACCOUNT_0"/>
      </CardActions>
    </Card>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width: '300px',
        height: "275px",
        marginTop: 20,
        border: "solid",
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Bob:
        </Typography><br/>
        {actorAVAX_1 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_1))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_1 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_1))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="ggAVAX"/>
          </Typography>
        )}
        {actorGGP_1 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_1))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Stake value="ACCOUNT_1"/>
      </CardActions>
    </Card>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width: '300px',
        height: "275px",
        marginTop: 20,
        border: "solid",
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Cam:
        </Typography><br/>
        {actorAVAX_2 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_2))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_2 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_2))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="ggAVAX"/>
          </Typography>
        )}
        {actorGGP_2 && (
          <Typography style={{marginRight:"20%"}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_2))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions>
      <Stake value="ACCOUNT_2"/>
      </CardActions>
    </Card>
    </>
  );
}

export default LiquidStakers;
