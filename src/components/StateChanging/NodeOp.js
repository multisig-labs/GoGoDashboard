import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import Minipool from "./Minipool";
import { useBalances } from "./utils/utils";

import { formatEther } from "@ethersproject/units";


// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function NodeOp(props) {
  // Actor Balances
  const nodeOp = useBalances(props.name)

  return (
    <>
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
          {nodeOp.AVAX && (
            <Typography variant="h6" component="div">
              {Math.round(formatEther(nodeOp.AVAX))}{" "}
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {nodeOp.ggAVAX && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(nodeOp.ggAVAX))}{" "}
              <img width="20px" height="20px" src={gogoballoon} alt="gg" />
              <img width="20px" height="20px" src={avaxlogo} alt="AVAX" />
            </Typography>
          )}
          {nodeOp.GGP && (
            <Typography style={{}} variant="h6" component="div">
              {Math.round(formatEther(nodeOp.GGP))}{" "}
              <img width="20px" height="20px" src={ggplogo} alt="GGP" />
            </Typography>
          )}
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Minipool name={props.name} />
        </CardActions>
      </Card>
    </>
  );
}

export default NodeOp;