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
setup:
	rm -rf ./src/abi/*
	cp -R ../gogopool-contracts/artifacts/contracts/contract ./src/abi/
	rm ./src/data/contractAddresses.json
	cut -c 18- ./src/data/deployed_addrs.js > ./src/data/contractAddresses.json
	npm start