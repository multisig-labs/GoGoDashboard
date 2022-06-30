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
# Copies over abi and contract addresses
setup:
	rm -rf ./src/abi/*
	cp -R ../gogopool-contracts/artifacts/contracts/contract ./src/abi/
	rm ./src/data/contractAddresses.json
	cp ../gogopool-contracts/cache/deployed_addrs_custom.json ./src/data
	mv ./src/data/deployed_addrs_custom.json ./src/data/contractAddresses.json
