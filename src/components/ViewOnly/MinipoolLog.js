import React, { useState } from "react";
import { useGetUniqueKey } from "react-generate-unique-key-for-map";
import { formatUnits } from "@ethersproject/units";
import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from "ethers";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

import contractAddresses from "../../data/contractAddresses.json";
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
import { formatAddr, checkNull, unixTimeConversion } from "./utils/formatHelpers";

// Custom hook for MinipoolManager Contract
function useMinipoolManager(func, argArray) {
  const MinipoolManagerInterface = new utils.Interface(MinipoolManagerABI.abi);
  const { value, error } =
    useCall(
      func && {
        contract: new Contract(
          contractAddresses["MinipoolManager"],
          MinipoolManagerInterface
        ), // instance of called contract
        method: func, // Method to be called
        args: argArray, // Method arguments - address to be checked for balance
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}

// Formatting for different data types
function format(item, name) {
  if (
    name.includes("multisigAddr") ||
    name.includes("nodeID") ||
    name.includes("owner")
  ) {
    return formatAddr(checkNull(item));
  } else if (name.includes("txID")) {
    return checkNull(item);
  } else if (name.includes("Amt") || name.includes("Fee")) {
    return formatUnits(checkNull(item));
  } else if (name.includes("startTime") || name.includes("endTime")) {
    return unixTimeConversion(formatUnits(checkNull(item), "wei"));
  } else {
    return formatUnits(checkNull(item), "wei");
  }
}

function MinipoolRow(props) {
  const [open, setOpen] = useState(false);
  const mpDataUncollapsed = [
    "avaxNodeOpAmt",
    "avaxLiquidStakerAmt",
    "avaxNodeOpRewardAmt",
    "avaxLiquidStakerRewardAmt",
    "avaxTotalRewardAmt",
    "delegationFee",
    "duration",
    "startTime",
    "endTime",
    "ggpSlashAmt",
    "errorCode",
  ];
  const mpDataCollapsed = [
    "index",
    "nodeID",
    "status",
    "owner",
    "multisigAddr",
    "txID",
  ];
  const mpDataTitles = [
    "NodeOp AVAX",
    "NodeOp GGP",
    "User AVAX",
    "Del Fee",
    "Dur",
    "Start",
    "End",
    "Total Rwds",
    "NodeOp Rwds",
    "User Rwds",
    "GGP Slash Amt",
  ];
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "▾" : "▸"}
          </IconButton>
        </TableCell>
        {mpDataCollapsed.filter(checkNull).map((item) => (
          <TableCell key={item}>
            <Typography variant="h7" component="div">
              {format(props.minipool[item], item)}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Paper variant="outlined" elevation={0} sx={{ margin: 1 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {mpDataTitles.map((item) => (
                        <TableCell key={item}>
                          <Typography variant="h7" component="div">
                            {item}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {mpDataUncollapsed.filter(checkNull).map((item) => (
                        <TableCell key={item}>
                          <Typography variant="h7" component="div">
                            {format(props.minipool[item], item)}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
            </Paper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function MinipoolLog() {
  const getUniqueKey = useGetUniqueKey();

  const mpDataTitles = [
    "index",
    "nodeID",
    "status",
    "owner",
    "multisig",
    "txID",
  ];
  const mps_1 = useMinipoolManager("getMinipools", [1, 0, 0]);
  const mps_2 = useMinipoolManager("getMinipools", [2, 0, 0]);
  const mps_3 = useMinipoolManager("getMinipools", [3, 0, 0]);
  const mps_4 = useMinipoolManager("getMinipools", [4, 0, 0]);
  const mps_5 = useMinipoolManager("getMinipools", [5, 0, 0]);
  const mps_6 = useMinipoolManager("getMinipools", [6, 0, 0]);
  const mps = [ mps_1, mps_2, mps_3, mps_4, mps_5, mps_6];

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 10 }}
        style={{
          alignContent: "center",
          maxWidth: "85%",
          margin: "auto",
          border: "solid",
        }}
      >
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              {mpDataTitles.map((item) => (
                <TableCell key={item}>
                  <Typography variant="h7" component="div">
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mps.filter(checkNull).map((mpgroup) => (
              <React.Fragment key={getUniqueKey(mpgroup)}>
                {mpgroup.filter(checkNull).map((mp) => (
                  <MinipoolRow key={mp} minipool={mp} />
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MinipoolLog;
