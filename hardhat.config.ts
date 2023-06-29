import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    // ref: https://gist.github.com/mingderwang/64046242aabff1e796ecaa4a93792fbd
    // ref: https://hardhat.org/hardhat-runner/docs/config
    ganache: {
      url: 'http://127.0.0.1:7545',
    },
    // polygon_mumbai: {
    //   url: 'https://rpc-mumbai.maticvigil.com',
    //   accounts: [process.env.PRIVATE_KEY ?? ''],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
