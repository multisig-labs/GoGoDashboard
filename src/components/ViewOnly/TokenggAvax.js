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

// Contract Address
import contractAddresses from "../../data/contractAddresses.json";
// ABI
import TokenggAvaxABI from "../../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json";

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

function TokenggAvax() {
  const rewardsCycleLength = useGGAVAXStats("rewardsCycleLength");
  const lastSync = useGGAVAXStats("lastSync");
  const rewardsCycleEnd = useGGAVAXStats("rewardsCycleEnd");
  const lastRewardAmount = useGGAVAXStats("lastRewardAmount");
  const totalReleasedAssets = useGGAVAXStats("totalReleasedAssets");
  const stakingTotalAssets = useGGAVAXStats("stakingTotalAssets");
  const targetFloatPercent = useGGAVAXStats("targetFloatPercent");
  const totalFloat = useGGAVAXStats("totalFloat");
  const amountAvailableForStaking = useGGAVAXStats("amountAvailableForStaking");
  const totalAssets = useGGAVAXStats("totalAssets");

  return (
    <div>
      <TableContainer sx={{ boxShadow: 10 }} component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>ggAVAX Variables:</b></TableCell>
              <TableCell align="right"><b>Values:</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Rewards Cycle Length
              </TableCell>
              {rewardsCycleLength && (
                <TableCell align="right">{rewardsCycleLength/86400} Days</TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Last Sync
              </TableCell>
              <TableCell align="right"> {lastSync}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Rewards Cycle End
              </TableCell>
              {rewardsCycleEnd && (
                <TableCell align="right">{rewardsCycleEnd}</TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Last Reward Amount
              </TableCell>
              {lastRewardAmount && (
                <TableCell align="right">
                  {formatEther(lastRewardAmount)}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Total Released Assets
              </TableCell>
              {totalReleasedAssets && (
                <TableCell align="right">
                  {formatEther(totalReleasedAssets)}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Staking Total Assets
              </TableCell>
              {stakingTotalAssets && (
                <TableCell align="right">
                  {formatEther(stakingTotalAssets)}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Target Float Percent
              </TableCell>
              {targetFloatPercent && (
                <TableCell align="right">
                  {formatUnits(targetFloatPercent)}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Total Float
              </TableCell>
              {totalFloat && (
                <TableCell align="right">{formatUnits(totalFloat)}</TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Amount Available For Staking
              </TableCell>
              {amountAvailableForStaking && (
                <TableCell align="right">
                  {formatUnits(amountAvailableForStaking)}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Total Assets
              </TableCell>
              {totalAssets && (
                <TableCell align="right">{formatUnits(totalAssets)}</TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TokenggAvax;
