import { useContractFunction } from '@usedapp/core'
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";


// Contract Address
import contractAddresses from "../data/contractAddresses.json"
import privateKeys from "../data/pk.json"
// ABI
import ggAvaxABI from "../abi/contract/tokens/TokenggAVAX.sol/TokenggAVAX.json"

function RedeemggAVAX(props) {
    const ggAvaxInterface = new utils.Interface(ggAvaxABI.abi)
    const ggAvaxContract = new Contract(contractAddresses["TokenggAVAX"], ggAvaxInterface)

    let w = new ethers.Wallet(privateKeys[props.value],ethers.getDefaultProvider("http://localhost:8545"));
  
    const { state, send } = useContractFunction(ggAvaxContract, 'redeemAVAX', {signer:w})
    const { status } = state
  
    const redeemAVAX = () => {
      void send(ethers.utils.parseEther("2000"))
    }
  
    return (
      <div>
        <button className="button-1" onClick={() => redeemAVAX()}>Unstake AVAX</button>
        <p2>---Status: {status}</p2>
      </div>
    )
}

export default RedeemggAVAX;