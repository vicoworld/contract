bootstrap:
	yarn
	cp .env.example .env

compile: 
	npx hardhat compile

.PHONY: test
test: 
	npx hardhat test

clean:
	npx hardhat clean 

prettier:
	npx prettier --write 'contracts/**/*.sol'

deploy_glnet:
	npx hardhat run scripts/deploy.ts --network goerli

deploy_thirdweb:
	npx thirdweb@latest deploy