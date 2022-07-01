import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';

import { formatEther } from "@ethersproject/units";

import Stake from "./Stake";
import { useBalances, createData } from "./utils/utils";

// AVAX logo
import avaxlogo from "../../assets/avax-logo.png";
// ggAVAX logo
import gogoballoon from "../../assets/gogopool-balloon.svg";
// GGP logo
import ggplogo from "../../assets/gogoDocs.svg";

function LiquidStakers() {
  // Actor Balances
  const alice = useBalances("alice")
  const bob = useBalances("bob")
  const cam = useBalances("cam")

  const actorcards = [
    createData("ALICE",alice.AVAX,alice.ggAVAX,alice.GGP),
    createData("BOB",bob.AVAX,bob.ggAVAX,bob.GGP),
    createData("CAM",cam.AVAX,cam.ggAVAX,cam.GGP)
  ]

  return (
      <>
    {actorcards.map((row) => (<Card className="card"
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
          {row.name}:
        </Typography><br/>
        {row.avax && (
          <Typography variant="h6" component="div">
            {Math.round(formatEther(row.avax))}{" "}
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {row.ggavax && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(row.ggavax))}{" "}
            <img width="20px" height="20px" src={gogoballoon} alt="gg"/>
            <img width="20px" height="20px" src={avaxlogo} alt="AVAX"/>
          </Typography>
        )}
        {row.ggp && (
          <Typography style={{}} variant="h6" component="div">
            {Math.round(formatEther(row.ggp))}{" "}
            <img width="20px" height="20px" src={ggplogo} alt="GGP" />
          </Typography>
        )}
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
      <Stake value={row.name}/>
      </CardActions>
    </Card>))}
    </>
  );
}

export default LiquidStakers;
