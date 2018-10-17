# Swarm.fund - Barnswallow Project
Welcome!

## What is Barnswallow?
Barnswallow is the codename for a sample blockchain explorer project to help developers get started with the js-swarm-sdk apis. 

## What is this project about?
This project lists recent transactions from the staging environment of Swarm fund's invest platform. This project was created for the Swarm developer community to learn about the Swarm blockchain while creating an application that has value for the entire Swarm ecoytm

## Current Status
Barnswallow is the start of a blockchain explorer and is not finished. Consider this project an open invitation to create a Swarm blockchain exploree

## How was Barnswallow created?
Barnswallow was created with React and Redux. 

## Developer experiences logged?


## Summary of project structure + code structure (edited)

## Dev environment used
* swarm staging environment (api link)
* js-sdk links update
* dependencies section

## About the js-swarm-sdk
This project uses the js Swarm SDK which can be used from any application. To get started with the swarm-js-sdk from any project you can do the following

1. Add swarm js-sdk dependency with a package.json and run npm install as follows

```
File: package.json
 "swarm-sdk": "git+ssh://git@github.com:swarmfund/js-swarm-sdk.git" 

Commandline
> npm install 
```

Alternatively you can do the following install npm packages, and run the following after adding your ssh keys to the ssh-agent, since this is a remote repository see https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

```
> npm install -S git+ssh://git@github.com:swarmfund/js-swarm-sdk.git
```

2. Create an instance with 

```
import { Swarm } from 'swarm-sdk'`
let sdk = await Swarm.create('https://api-stage.swarm.fund')
```
               

3.	Explore swarm js-sdk resources on https://github.com/swarmfund/js-swarm-sdk
4.	Creating a Swarm wallet 

To get started quickly, use your wallet credentials as follows. For this codebase you can include
```
let { wallet, recoverySeed } = await sdk.api.wallets.create(
 'my@email.com',
 'MyPassw0rd'
)
```

// Get the confirmation token from email
await sdk.api.wallets.verifyEmail(token)



let wallet = await sdk.api.wallets.get('my@email.com', 'MyPassw0rd');
sdk.useWallet(wallet);



blockExp.js has the code, simply plugin the email and password 



# Contributing
Contributions to the project are welcome and will benefit the entire Swarm Fund community. See [CONTRIBUTING.md](CONTRIBUTING.md)