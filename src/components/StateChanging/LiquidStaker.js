import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import { formatEther } from "@ethersproject/units";

import Stake from "./Stake";
import { useBalances } from "./utils/utils";

// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";


function LiquidStaker(props) {
  // Actor Balances
  const actor = useBalances(props.name);

  return (
    <Card
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
          {props.name}:
        </Typography>
        <br />
        {actor.AVAX && (
          <Typography variant="h6" component="div">
            {Math.round(formatEther(actor.AVAX))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
          </Typography>
        )}
        {actor.ggAVAX && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actor.ggAVAX))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg" />
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
          </Typography>
        )}
        {actor.GGP && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(actor.GGP))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      {/* Staking Button */}
      <CardActions style={{ justifyContent: "center" }}>
        <Stake name={props.name} />
      </CardActions>
    </Card>
  );
}

export default LiquidStaker;