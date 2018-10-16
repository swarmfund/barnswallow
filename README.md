# Swarm.fund - Barnswallow
This project is a the start of a blockchain explorer based on REACT 
and REDUX to demonstrate usage of the js-swarm-sdk apis. 

Steps to get started:
1.	Add swarm js-sdk to the project,
Include, "swarm-sdk": "git+ssh://git@github.com:swarmfund/js-swarm-sdk.git" to package.json and run the command, “npm install”. 
       Or
 Install npm packages, and run, “npm install -S git+ssh://git@github.com:swarmfund/js-swarm-sdk.git “ 
(Make sure to add your ssh keys to the ssh-agent, since this is a remote repository https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)


2.	Create an instance,
import { Swarm } from 'swarm-sdk'

let sdk = await Swarm.create('https://api-stage.swarm.fund')
               (The link points to Swarm staging API)

3.	Explore swarm js-sdk resources on https://github.com/swarmfund/js-swarm-sdk

4.	To perform account specific functions, a wallet has to be created or use the existing wallet.

blockExp.js has the code, simply plugin the email and password 



# Contributing
Contributions to the project are welcome and will benefit the entire Swarm Fund community. See [CONTRIBUTING.md](CONTRIBUTING.md)