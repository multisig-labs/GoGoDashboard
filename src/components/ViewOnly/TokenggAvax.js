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

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import TokenggAvaxABI from "../../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json";

import { unixTimeConversion } from "./utils/formatHelpers";

function useGGAVAXStats(func) {
  const TokenggAvaxInterface = new utils.Interface(TokenggAvaxABI.abi);
  const { value, error } =
    useCall(
      func && {
        contract: new Contract(
          contractAddresses["TokenggAVAX"],
          TokenggAvaxInterface
        ), // instance of called contract
        method: func, // Method to be called
        args: [], // Method arguments - address to be checked for balance
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}

function createData(stat, value) {
  return { stat, value };
}

function TokenggAvax() {
  const rewardsCycleLength = useGGAVAXStats("rewardsCycleLength") / 86400;
  const lastSync = useGGAVAXStats("lastSync");
  const rewardsCycleEnd = useGGAVAXStats("rewardsCycleEnd");
  const lastRewardAmount = useGGAVAXStats("lastRewardAmount");
  const totalReleasedAssets = useGGAVAXStats("totalReleasedAssets");
  const stakingTotalAssets = useGGAVAXStats("stakingTotalAssets");
  const targetFloatPercent = useGGAVAXStats("targetFloatPercent");
  const totalFloat = useGGAVAXStats("totalFloat");
  const amountAvailableForStaking = useGGAVAXStats("amountAvailableForStaking");
  const totalAssets = useGGAVAXStats("totalAssets");

  const rows1 = [
    createData("Rewards Cycle Length", rewardsCycleLength + " days"),
    createData("Last Sync", unixTimeConversion(lastSync)),
    createData("Reward Cycle End", unixTimeConversion(rewardsCycleEnd)),
  ];

  const rows2 = [
    createData("Last Reward Amt", lastRewardAmount),
    createData("Total Released Assets", totalReleasedAssets),
    createData("Staking Total Assets", stakingTotalAssets),
    createData("Target Float %", targetFloatPercent),
    createData("Total Float", totalFloat),
    createData("Amount Avail for Stake", amountAvailableForStaking),
    createData("Total Assets", totalAssets),
  ];

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 10 }}
        style={{
          alignContent: "center",
          maxWidth: "40%",
          margin: "auto",
          border: "solid",
        }}
      >
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" component="div">
                  ggAVAX
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5" component="div">
                  Value
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow
                key={row.stat}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stat}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
            {rows2.map((row) => (
              <TableRow
                key={row.stat}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stat}
                </TableCell>
                {row.value && (
                  <TableCell align="right">{formatUnits(row.value)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TokenggAvax;
