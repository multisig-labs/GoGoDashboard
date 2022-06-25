# GoGoDashboard
### A React display for all GoGoPool smart contract variables/information
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/Screenshot.png" height="400px"> </img>
# Demo
### 1) You can stake/unstake with demo actors:
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/demo1.png" height="300px"> </img>
### 2) You can create minipools with the demo Node Operators ( GGP Bond is 200 and the duration is 14 days )
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/demo2.png" height="400px"> </img>
### 3) You can run through rialto's commands step-by-step:
### ( Use hardhat command to skip forward 14 days before using "Record Staking End" )
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/demo3.png" height="300px"> </img>

# How-to for local hardhat chain:
1) Local Node is running and smart contracts deployed
2) Make sure the correct multisig is registered (npx hardhat:debug setup)
3) Copy the GoGoPool contract addresses, usually found here: <br> <img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/setup1.png" height="200px"> </img> <br> into the contractaddresses.json file found in /data <br> <img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/setup2.png" height="200px"> </img> 
4) Copy the contracts ABI folder (found in artifacts) <br> <img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/setup3.png" height="200px"> </img> <br> and paste it into the folder titled "abi" <br> <img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/setup4.png" height="200px"> </img> <br>
5) Now the first page of the Dashboard should be working :)
6) Make sure the public and private keys in accounts.json and pk.json are associated with the correct wallets on your local chain <br> <img src="https://github.com/CarterBloop/GoGoDashboard/blob/cody-branch/setup2.png" height="200px"> </img>
7) yarn
8) yarn start
