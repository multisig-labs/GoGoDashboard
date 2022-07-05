import { Chain } from '@usedapp/core'
import contractAddresses from "./data/contractAddresses.json"

export const AnrChain= {
  chainId: 43112,
  chainName: 'AnrChain',
  isTestChain: false,
  isLocalChain: true,
  multicallAddress: contractAddresses["Multicall"],
  // Optional parameters:
  rpcUrl: process.env.REACT_APP_ETH_RPC_URL,
}