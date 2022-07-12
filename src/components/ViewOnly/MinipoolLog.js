import { formatEther, formatUnits } from "@ethersproject/units";
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

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import MinipoolManagerABI from "../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Accounts
import accounts from "../../data/anrAccounts.json";

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

function unixTimeConversion(unixTimestamp) {
  if (unixTimestamp === "0") {
    return "-";
  }
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
}
function checkNull(item) {
  if (item !== undefined) {
    return item;
  } else {
    return 0;
  }
}
function formatAddr(addr) {
	for (var n in accounts) {
		if (addr === accounts[n].addr) {
			return(n);
		}
	}
    return(addr.substring(0, 6) + ".." + addr.substring(addr.length - 4));
}

function format(item, name) {
  if (
    name.includes("multisigAddr") ||
    name.includes("nodeID") ||
    name.includes("owner")
  ) {
    return formatAddr(checkNull(item));
  } else if(name.includes("txID")){
    return checkNull(item);
  } else if(name.includes("Amt") || name.includes("Fee")) {
    return formatUnits(checkNull(item));
  } else if(name.includes("startTime") || name.includes("endTime")){
    return unixTimeConversion(formatUnits(checkNull(item),"wei"));
  } else {
      return formatUnits(checkNull(item),"wei");
  }
}
// 		"nodeID",
// 		"status",
// 		"owner",
// 		"multisig",
// 		"avaxNopAmt",
// 		"ggpBondAmt",
// 		"avaxUsrAmt",
// 		"delFee",
// 		"dur",
// 		"start",
// 		"end",
// 		"totRwds",
// 		"nopRwds",
// 		"usrRwds",
// 		"ggpSlashAmt"

function MinipoolLog() {
  const mpData = [
    "nodeID",
    "status",
    "owner",
    "multisigAddr",
    "avaxNodeOpAmt",
    "ggpBondAmt",
    "avaxUsrAmt",
    "delegationFee",
    "duration",
    "startTime",
    "endTime",
    "avaxTotalRewardAmt",
    "avaxNodeOpRewardAmt",
    "avaxUserRewardAmt",
    "ggpSlashAmt",
    "txID",
  ];
  const mpDataTitles = [
    "nodeID",
    "status",
    "owner",
    "multisig",
    "avaxNopAmt",
    "ggpBondAmt",
    "avaxUsrAmt",
    "delFee",
    "dur",
    "start",
    "end",
    "totRwds",
    "nopRwds",
    "usrRwds",
    "ggpSlashAmt",
    "txID",
  ];
  const mps_0 = useMinipoolManager("getMinipools", [0, 0, 0]);
  const mps_1 = useMinipoolManager("getMinipools", [1, 0, 0]);
  const mps_2 = useMinipoolManager("getMinipools", [2, 0, 0]);
  const mps_3 = useMinipoolManager("getMinipools", [3, 0, 0]);
  const mps_4 = useMinipoolManager("getMinipools", [4, 0, 0]);
  const mps_5 = useMinipoolManager("getMinipools", [5, 0, 0]);
  const mps = [mps_0, mps_1, mps_2, mps_3, mps_4, mps_5];
  console.log(mps);
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 10 }}
        style={{
          alignContent: "center",
          maxWidth: "100%",
          margin: "auto",
          border: "solid",
        }}
      >
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {mpDataTitles.map((item) => (
                <TableCell>
                  <Typography variant="h7" component="div">
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mps.filter(checkNull).map((mpgroup) => (
              <>
                {mpgroup.filter(checkNull).map((mp) => (
                  <TableRow>
                    {mpData.filter(checkNull).map((item) => (
                      <TableCell>
                        <Typography variant="h7" component="div">
                          {format(mp[item], item)}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MinipoolLog;
