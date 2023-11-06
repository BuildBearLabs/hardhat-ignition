require('@nomicfoundation/hardhat-toolbox')
require('@nomicfoundation/hardhat-ignition')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',

  defaultNetwork: "buildbear",

  networks: {
    hardhat: {},
    buildbear: {
      url: "//Paste the Testnet RPC here from BuildBear Dashboard",
    },
  },

}
