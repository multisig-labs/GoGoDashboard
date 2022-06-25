import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
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
  const actorAVAX_0 = useEtherBalance(accounts["ALICE"]);
  const actorggAVAX_0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["ALICE"]
  );
  const actorGGP_0 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["ALICE"]
  );
  // Actor 1 Balances
  const actorAVAX_1 = useEtherBalance(accounts["BOB"]);
  const actorggAVAX_1 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["BOB"]
  );
  const actorGGP_1 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["BOB"]
  );
  // Actor 2 Balances
  const actorAVAX_2 = useEtherBalance(accounts["CAM"]);
  const actorggAVAX_2 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["CAM"]
  );
  const actorGGP_2 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["CAM"]
  );

  return (
      <>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width:'300px',
        height:'fit-content',
        border: "solid",
        justifyContent:'center',
        margin:'5%'
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Alice:
        </Typography>
        {actorAVAX_0 && (
          <Typography variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_0))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_0 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_0))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorGGP_0 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_0))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
      <Stake value="ALICE"/>
      </CardActions>
    </Card>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width:'300px',
        height:'fit-content',
        border: "solid",
        justifyContent:'center',
        margin:'5%'
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Bob:
        </Typography>
        {actorAVAX_1 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_1))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_1 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_1))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="ggAVAX"/>
          </Typography>
        )}
        {actorGGP_1 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_1))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
      <Stake value="BOB"/>
      </CardActions>
    </Card>
    <Card className="card"
      sx={{ boxShadow: 10 }}
      style={{
        width:'300px',
        height:'fit-content',
        border: "solid",
        justifyContent:'center',
        margin:'5%'
      }}
    >
      <CardContent>
        <Typography style={{ textAlign: "center"}} variant="h5" component="div">
          Cam:
        </Typography>
        {actorAVAX_2 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorAVAX_2))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {actorggAVAX_2 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorggAVAX_2))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="ggAVAX"/>
          </Typography>
        )}
        {actorGGP_2 && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actorGGP_2))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
      <Stake value="CAM"/>
      </CardActions>
    </Card>
    </>
  );
}

export default LiquidStakers;
