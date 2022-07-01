import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import Minipool from "./Minipool";
import { useBalances, createData } from "./utils/utils";

import { formatEther } from "@ethersproject/units";


// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function NodeOperators() {
  // Actor Balances
  const nodeOp1 = useBalances("nodeOp1")
  const nodeOp2 = useBalances("nodeOp2")

  const nodeopcards = [
    createData("NODEOP1",nodeOp1.AVAX,nodeOp1.ggAVAX,nodeOp1.GGP),
    createData("NODEOP2",nodeOp2.AVAX,nodeOp2.ggAVAX,nodeOp2.GGP)
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
