# Swarm.fund - Barnswallow Project
Welcome!

## What is Barnswallow?
Barnswallow is the codename for a sample blockchain explorer project to help developers get started with the js-swarm-sdk apis. 

## What is this project about?
This project lists recent transactions from the staging environment of Swarm fund's invest platform. This project was created for the Swarm developer community to learn about the Swarm blockchain while creating an application that has value for the entire Swarm ecosytem.

## What is the current status of this project?
Barnswallow is the start of a blockchain explorer and is not completed. Consider this project an open invitation to learn about blockchains in general and Swarm's blockchain specifically while adding features to this open project. 

## How was Barnswallow created?
Barnswallow was created with React and Redux. The CSS for this project was inspired from https://stellarscan.io/

## Summary of project structure + code structure (edited)
## Tell me about the development environment for this project
* swarm staging environment (link)
* [js-swarm-sdk](https://github.com/swarmfund/js-swarm-sdk/)
* dependencies section

## About the js-swarm-sdk
This project uses the js Swarm SDK which can be used from any application. To get started with the swarm-js-sdk from any project you can do the following

1. Add js-swarm-sdk dependency with a package.json and run npm install as follows

```
File: package.json
 "swarm-sdk": "git+ssh://git@github.com:swarmfund/js-swarm-sdk.git" 

Commandline
> npm install 
```

Alternatively you can do the following to install npm packages. Run the following commands after adding your ssh keys to the ssh-agent (since this is a remote repository see https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

```
> npm install -S git+ssh://git@github.com:swarmfund/js-swarm-sdk.git
```

2. Create an instance of the sdk 

```
import { Swarm } from 'swarm-sdk'`
let sdk = await Swarm.create('https://api-stage.swarm.fund')
```

3.	Explore [js-swarm-sdk](https://github.com/swarmfund/js-swarm-sdk) resources
4.	Create a Swarm wallet as follows,

To get started on your local development environment, use your wallet credentials as follows or substitute with an environment variable. For applications that are served on the web, prompt the user for these credentials,
```
let { wallet, recoverySeed } = await sdk.api.wallets.create(
 'my@email.com',
 'MyPassw0rd'
)

// Get the confirmation token from email and include as follows
await sdk.api.wallets.verifyEmail(token)

let wallet = await sdk.api.wallets.get('my@email.com', 'MyPassw0rd');
sdk.useWallet(wallet);
```

# Contributing
Contributions to the project are welcome and will benefit the entire Swarm Fund community. See [CONTRIBUTING.md](CONTRIBUTING.md)