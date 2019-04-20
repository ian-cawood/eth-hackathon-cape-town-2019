import React, { Component } from 'react'
import getWeb3, { getGanacheWeb3 } from "./utils/getWeb3";

import Page1 from './components/page1.jsx'

import { zeppelinSolidityHotLoaderOptions } from '../config/webpack';

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    route: window.location.pathname.replace('/', ''),
  }


  getGanacheAddresses = async () => {
    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3();
    }
    if (this.ganacheProvider) {
      return await this.ganacheProvider.eth.getAccounts();
    }
    return [];
  }

  componentDidMount = async () => {
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
    const ganacheAccounts = await this.getGanacheAddresses();
    console.log(ganacheAccounts);
    let Counter = {};
    let Wallet = {};
    let Treasury = {};
    try {
      Treasury = require('../../contracts/Treasury.sol');
    } catch (e) {
      console.log(e);
    }
    try {
      const isProd = process.env.NODE_ENV === 'production';
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        let ganacheAccounts = [];
        try {
          ganacheAccounts = await this.getGanacheAddresses();
        } catch (e) {
          console.log('Ganache is not running');
        }
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();
        const isMetaMask = web3.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]): web3.utils.toWei('0');
        balance = web3.utils.fromWei(balance, 'ether');
        let instanceTreasury = null;
        let deployedNetwork = null;

        if (Treasury.networks) {
          deployedNetwork = Treasury.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceTreasury = new web3.eth.Contract(
              Treasury.abi,
              deployedNetwork && deployedNetwork.address,
            );
          }
        }
        console.log(Treasury);
        console.log(instanceTreasury);
        if (instanceTreasury) {
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ 
            web3,
            ganacheAccounts,
            accounts,
            balance,
            networkId,
            networkType,
            hotLoaderDisabled,
            isMetaMask,
            contract: instanceTreasury,
          });
        }
        else {
          this.setState({
            web3,
            ganacheAccounts,
            accounts,
            balance,
            networkId,
            networkType,
            hotLoaderDisabled,
            isMetaMask
          });
        }

        this.openSupplierVote();
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  openSupplierVote = async () => {
    const { contract } = this.state;

    const response = await contract.methods.openSupplierVote(+ new Date()).call();

    try {
      const tryVote = await contract.methods.voteForSupplier('0x70618e839F7d695D8c8241A1090E3AeA447DFA00').call();
      console.log(tryVote);
    }
    catch (e) {
      console.log(e);
    }

    console.log(response);
  }

  getCount = async () => {
    const { contract } = this.state;
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getCounter(new Date()).call();
    // Update state with the result.
    this.setState({ count: response });
  };

  render() {
    return <Page1 />
  }
}

export default App
