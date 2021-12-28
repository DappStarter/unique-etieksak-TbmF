require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan razor spider coach hidden only food gate'; 
let testAccounts = [
"0x1b9a8a2fca9bbfa4134dbb89ff341a35f26dfd77a60a4ee1219979230edcf6b4",
"0x4c0dc017ba537ae7043edd5444b572b4ba7c94afbe6ddb60ef75d528908bdf15",
"0xc8507c53a2b3b570ba463cfe21c34404670f3e08cdfe373b9e4d8ca09e229c7d",
"0x0acfe1a73d53cc32e0c6fcfc90ef157f5d96923c41d2136f54023f1fe9e3749b",
"0x0b9bb0b6243deafebebc1d4d453dc92060dc5f1726ef2b797fa12c80a1123d19",
"0xdc00e60c469a356d386b5651f82cf605871f65cdf1232f170d6442821ec09b9b",
"0xcc343c24ec9ce74aa6d536912137246b4260cab0ca4a46e4714b5983e588012e",
"0xc00aa08fd389f3a5d90a2ed6754dc80070668501e81b779d1275e3733353c272",
"0xf3ee60dc0ec2c5c9e58a8ecb6a8e56c4733f3ab19ac9f6b666e9b3505b3b5cdb",
"0x3a94a391fadfe3a7723cfa77c854a5bfd1b144f2798e04469ed56193e3a18368"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


