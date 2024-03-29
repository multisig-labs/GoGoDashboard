# Justfiles are better Makefiles (Don't @ me)
# Install the `just` command from here https://github.com/casey/just
# or if you have rust: cargo install just
# https://cheatography.com/linux-china/cheat-sheets/justfile/

# Print out some help
default:
	@just --list --unsorted

# Install dependencies
install:
	yarn install

# Setup
# Copies over ABI and Deployed Contract Addresses
# Make sure ETH RPC URL is correct with:
# export ETH_RPC_URL=`curl --silent -X POST -k http://localhost:8081/v1/control/uris -d '' | jq -r '.uris[0]'`
setup:
	# Replace ABI
	rm -f -rf ./src/abi/contract
	cp -R ../gogopool-contracts/artifacts/contracts/contract ./src/abi/
	# Replace Contract Addresses
	rm -f ./src/data/contractAddresses.json
	cp ../gogopool-contracts/cache/deployed_addrs_custom.json ./src/data
	mv ./src/data/deployed_addrs_custom.json ./src/data/contractAddresses.json
	# Replace Accounts Addresses
	rm -f ./src/data/anrAccounts.json
	cp ../anr/accounts.json ./src/data
	mv ./src/data/accounts.json ./src/data/anrAccounts.json
