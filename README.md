# GoGoDashboard
### A React display for all GoGoPool smart contract variables/information
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/main/Screenshot.png" height="400px"> </img>
# Setup:
### 1) yarn install
### 2) Set ETH_RPC_URL with:
    export ETH_RPC_URL=`curl --silent -X POST -k http://localhost:8081/v1/control/uris -d '' | jq -r '.uris[0]'`
### 3) just setup
# Demo
### 1) Stake/unstake with actors:
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/main/demo1.png" height="300px"> </img>
### 2) Create minipools with the Node Operators
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/main/demo2.png" height="400px"> </img>
### 3) Run through rialto's commands step-by-step:
<img src="https://github.com/CarterBloop/GoGoDashboard/blob/main/demo3.png" height="300px"> </img>

