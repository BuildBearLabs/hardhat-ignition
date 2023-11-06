require('@nomicfoundation/hardhat-toolbox')
require('@nomicfoundation/hardhat-ignition')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',

  defaultNetwork: "buildbear",

  networks: {
    hardhat: {},
    buildbear: {
      url: "https://rpc.dev.buildbear.io/spiritual-wicket-systri-warrick-f9c2771d",
    },
  },

  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 1,
        urls: {
          apiURL: "https://rpc.buildbear.io/verify/etherscan/spiritual-wicket-systri-warrick-f9c2771d",
          browserURL: "https://explorer.buildbear.io/spiritual-wicket-systri-warrick-f9c2771d",
        },
      },
    ],
  },
}
