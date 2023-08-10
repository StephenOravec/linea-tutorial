module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    dashboard: {
      host: "localhost",
      port: 24012,
      verbose: false
    }
  },
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
