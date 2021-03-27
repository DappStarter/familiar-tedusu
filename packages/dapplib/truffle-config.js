require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind million good process tail giggle'; 
let testAccounts = [
"0x93f5e010a58d09f67dd40232acbe85fc9f04d210c09f0fb14902740c4576ed05",
"0xee0a0cc47bcc95ba6a4a098d8ab6922126c6c1a2adb40e447b7e31679e0c4977",
"0x33977a267b2e04f963a849ce3cbea86153747cb0d30a388734308a01209a5a1e",
"0x36480d487396a8625a2a53d475343e62180c4ed0006ef8766333c3809b13cf44",
"0x011a59c77be9ea71267f32187e81980bb271baf87bb2be99421efe4b1c5f8266",
"0x18f4992f61d55da2f77881641bcbcc08e6ee232a44c90f648b6caf516cdd0aa6",
"0xbe34474200ddff9214e94a44e6a47ebaf12809e6304e5a9c1a118f91b3f36caa",
"0xda9224ec693c7f78e9ce687edde8cec8229f60e9bd4034cc6467f21ec426043c",
"0x7ef5700b5d86d41dbc73e153b8781fe1862c948151f6623654be145b19e881d7",
"0x9773fa7e4a39dec12021e58c4ae135f8c2b12f3eebecb0764117d7fda6bbeae7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
