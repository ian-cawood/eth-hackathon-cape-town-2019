Ethereum hackathon 2019
-------

## Global dependencies
```sh
npm install -g zos
npm install -g ganache-cli
npm install -g truffle
```

## Local dependencies
Run the following commands to install local dependencies
```sh
npm install
```
```sh
cd client
npm install
```

## Quick start

Open a separate terminal window and start a local ganache chain with
```sh
ganache-cli --secure -u 0 -u 1 -u 2 --deterministic
```

Start the development server with
```sh
cd client
npm run start
```
