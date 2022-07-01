import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import Minipool from "./Minipool";

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

function createData( name, avax, ggavax, ggp) {
  return { name, avax, ggavax, ggp };
}

function NodeOperators() {
  // Actor 0 Balances
  const actorAVAX_0 = useEtherBalance(accounts["NODEOP1"]);
  const actorggAVAX_0 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["NODEOP1"]
  );
  const actorGGP_0 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["NODEOP1"]
  );
  // Actor 1 Balances
  const actorAVAX_1 = useEtherBalance(accounts["NODEOP2"]);
  const actorggAVAX_1 = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts["NODEOP2"]
  );
  const actorGGP_1 = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts["NODEOP2"]
  );

  const nodeopcards = [
    createData("NODEOP1",actorAVAX_0,actorggAVAX_0,actorGGP_0),
    createData("NODEOP2",actorAVAX_1,actorggAVAX_1,actorGGP_1),
  ]

  return (
    <>
      {nodeopcards.map((row) => (<Card
        className="card"
        sx={{ boxShadow: 10 }}
        style={{
          width: "300px",
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
            {row.name}:
          </Typography>
          {row.avax && (
            <Typography variant="h6" component="div">
              {Math.round(formatEther(row.avax))}{" "}
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {row.ggavax && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(row.ggavax))}{" "}
              <img width="20px" height="20px" src={gogoballoon} alt="gg" />
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {row.ggp && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(row.ggp))}{" "}
              <img width="20px" height="20px" src={ggplogo} alt="GGP" />
            </Typography>
          )}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Minipool value={row.name} />
        </CardActions>
      </Card>))}
    </>
  );
}

export default NodeOperators;
