// https://eth-ropsten.alchemyapi.io/v2/rl1HeWUrm8keIlwYPypTaQYdgD01zfIW

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6q7O_JKduOlAgDCfqBdlpe1kdgD4RweI',
      accounts: ['fdc7511c8f88c160e561677c8633ee969c2abbc43575234a629ecfc57fdbe9a1']
    }
  }
}