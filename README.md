# Lamington Boilerplate

A simple EOSIO with Lamington project boilerplate.

Lamington is an easy to use contract development toolset for EOSIO.

Easily compile, deploy and test smart contracts within containerized environments.

## Usage
Please install all required dependencies before running the scripts for the first time.
```
npm install
```

## Scripts
We've pre-configured all the necessary scripts to get your Lamington development environment up and ready straight away.

### Building
Builds compile the contract `wasm` and `abi` files within Lamington's `outDir`. TypeScript definitions are then generated from the contract `abi` and saved alongside the C++ contract code.

```
npm run build
```

TypeScript definitions are used within Mocha test files to execute type safe actions and account data.

### Testing
Lamington is ready to run your Mocha Typescript tests out of the box, so we've included an `example.test.ts` within the `contracts/example` directory to get you started.

```
npm run test
```

If we've done our part right, everything should pass, and your ready to start developing.

### Prerequisites

This example requires Docker and NodeJS to be installed.

[Docker](https://www.docker.com/get-started): We recommend [installing Docker with the standard installer for your platform](https://www.docker.com/get-started)

[NodeJS](https://github.com/creationix/nvm): We recommend [installing NodeJS with NVM](https://github.com/creationix/nvm)