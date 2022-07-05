import { ethers } from "ethers";
import { useEtherBalance, useTokenBalance } from "@usedapp/core";

// Minipool ABI
import minipoolABI from "../../../abi/contract/MinipoolManager.sol/MinipoolManager.json";
// Contract Address
import contractAddresses from "../../../data/contractAddresses.json";
// Account Addresses
import accounts from "../../../data/anrAccounts.json";

// Random addresses to use for nodeIDs
export const nodeID = (seed) => {
  return emptyWallet(seed).address;
};

export const emptyWallet = (seed) => {
  const pk = randomBytes(seed, 32);
  const w = new ethers.Wallet(pk);
  return w;
};

// NOT really random, only used for generating test data
export function randomBytes(seed, lower, upper) {
  if (!upper) {
    upper = lower;
  }

  if (upper === 0 && upper === lower) {
    return new Uint8Array(0);
  }

  let result = ethers.utils.arrayify(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes(seed))
  );
  while (result.length < upper) {
    result = ethers.utils.concat([result, ethers.utils.keccak256(result)]);
  }

  const top = ethers.utils.arrayify(ethers.utils.keccak256(result));
  const percent = ((top[0] << 16) | (top[1] << 8) | top[2]) / 0x01000000;

  return result.slice(0, lower + Math.floor((upper - lower) * percent));
}

export async function now() {
  const p = ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL);
  const latest = await p.getBlockNumber();
  const b = await p.getBlock(latest);
  return ethers.BigNumber.from(b.timestamp);
}

// Calculate Minipool Duration
export async function calcDuration(name) {
  const minipoolManager = new ethers.Contract(
    contractAddresses["MinipoolManager"],
    minipoolABI.abi,
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );
  const i = await minipoolManager.getIndexOf(nodeID(name));
  const mp = await minipoolManager.getMinipool(i);
  const end = mp.startTime.add(mp.duration);
  return end;
}

// Calculate Minipool Reward
export async function calcReward(name, reward) {
  const minipoolManager = new ethers.Contract(
    contractAddresses["MinipoolManager"],
    minipoolABI.abi,
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );
  const i = await minipoolManager.getIndexOf(nodeID(name));
  const mp = await minipoolManager.getMinipool(i);
  const avax = mp.avaxNodeOpAmt.add(mp.avaxUserAmt);
  reward = ethers.utils.parseEther(reward.toString());
  const total = avax.add(reward);
  return total;
}

// Get Actor Balances (AVAX,ggAVAX,GGP)
export const useBalances = (name) => {
  const actorAVAX = useEtherBalance(accounts[name].addr);
  const actorggAVAX = useTokenBalance(
    contractAddresses["TokenggAVAX"],
    accounts[name].addr
  );
  const actorGGP = useTokenBalance(
    contractAddresses["TokenGGP"],
    accounts[name].addr
  );
  return {
    AVAX: actorAVAX,
    ggAVAX: actorggAVAX,
    GGP: actorGGP,
  };
}

export function createData( name, avax, ggavax, ggp) {
  return { name, avax, ggavax, ggp };
}