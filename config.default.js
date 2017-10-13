var config = {
    development: {
        debug: true,
        port: 3000,
        url: 'http://yourwebsite.com',
        // IOTA Provider details
        iota: {
            host:   'https://yournode.com',
            port:   '14265',
            seed:   'YOUR99SEED'
        },
        // https://coinhive.com details
        coinhive: {
            //Public key is send to users for identify your pool
            publicKey: 'coinHivePublicKeyHere',
            //Private key is used for http api, get info about mining
            privateKey: 'coinHIvePrivateKeyHere',
            // How much percent take for final client reward
            feeRatio: 10
        },
        WebSocket: {
            port:   '3003'
        }
    },
    production: {
        debug: false,
        port: 3000,
        url: 'https://yourwebsite.com',
        // IOTA Provider details
        iota: {
            host:   'https://yournode.com',
            port:   '14265',
            seed:   'YOUR99SEED'
        },
        // https://coinhive.com details
        coinhive: {
            //Public key is send to users for identify your pool
            publicKey: 'coinHivePublicKeyHere',
            //Private key is used for http api, get info about mining
            privateKey: 'coinHIvePrivateKeyHere',
            // How much percent take for final client reward
            feeRatio: 10
        },
        WebSocket: {
            port:   '3003'
        }
    }
};
module.exports = config;