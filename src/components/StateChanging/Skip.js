import { useState } from "react";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { ethers } from "ethers";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

async function logTime() {
  // getting timestamp
  const blockNumBefore = await ethers
    .getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
    .getBlockNumber();
  const blockBefore = await ethers
    .getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
    .getBlock(blockNumBefore);
  console.log(blockBefore.timestamp);
}

function Skip() {
  const [dur, setDur] = useState("");

  function handleClick() {
    const p = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ETH_RPC_URL
    );
    p.send("avm.advanceTime", [86400 * dur]);
    p.send("evm_mine", []);
  }
  return (
    <div>
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
            Skip Time:
          </Typography>
          <FormGroup>
            <TextField
              id="outlined-basic"
              label="Num Days"
              variant="outlined"
              value={dur}
              onChange={(e) => setDur(e.target.value)}
            />
            <ButtonGroup
              style={{ padding: "0px" }}
              variant="outlined"
              fullWidth
            >
              <Button onClick={() => handleClick()}>Skip</Button>
              <Button onClick={() => logTime()}>Log Time </Button>
            </ButtonGroup>
          </FormGroup>
        </CardContent>
      </Card>
    </div>
  );
}

export default Skip;
