import { ethers } from "ethers";

// ABI
import storageABI from "../../../abi/contract/Storage.sol/Storage.json";
// Contract Addresses
import addrs from "../../../data/contractAddresses.json";

const hash = (types, vals) => {
  const h = ethers.utils.solidityKeccak256(types, vals);
  return h;
};

export async function getAddrs() {
  // The Contract object
  const storage = new ethers.Contract(
    process.env.REACT_APP_STORAGE_ADDR,
    storageABI.abi,
    ethers.getDefaultProvider(process.env.REACT_APP_ETH_RPC_URL)
  );
  for (const name in addrs) {
    try {
      const address = await storage.getAddress(
        hash(["string", "string"], ["contract.address", name])
      );
      addrs[name] = address;
    } catch (e) {
      console.log("error", e);
    }
  }
}
