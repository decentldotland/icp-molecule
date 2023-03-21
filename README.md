<p align="center">
  <a href="https://decent.land">
    <img src="https://raw.githubusercontent.com/decentldotland/ark-protocol/main/img/new-logo.png" height="200">
  </a>
  <h3 align="center"><code>@decentdotland/icp-molecule</code></h3>
  <p align="center">Bridging ICP with other blockchains</p>
</p>

## About
This repository is dedicated to the work on the molecule and the rest of the APIs and contracts to bridge [ICP (Dfinity)](https://dfinity.org/) with [EXM](https://exm.dev) through [molecule.sh](http://molecule.sh) and facilitate multichain smart contract interoperability.

## Build and run

```console
git pull https://github.com/decentldotland/icp-molecule

npm install && npm run start
```

## Test the contract example

```console
npm i @execution-machine/sdk
npm run test-contract
```

That command above initiates a local EXM environment and invokes an offchain test `write` interaction, the resulting `state` is returned.

| name  | source |
| ------------- |:-------------:|
| testing minimal name service      | [source code](./contract/ns.js)   |
| testing minimal name service tests      | [source code](./contract/ns.tests.js)    |
| mainnet deployed contract      |   [zSZ1bUpuTwxFpedGwOyxhXqXL-HSLx90SkUkLm0XHzQ](https://api.exm.dev/read/zSZ1bUpuTwxFpedGwOyxhXqXL-HSLx90SkUkLm0XHzQ)   |


## License
This projects is licensed under the [MIT License](./LICENSE)
