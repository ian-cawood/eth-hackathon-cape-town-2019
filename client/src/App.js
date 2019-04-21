import React, { Component } from 'react'
import getWeb3, { getGanacheWeb3 } from './utils/getWeb3'
import moment from 'moment'

import Page1 from './components/page1.jsx'
import Page2 from './components/page2.jsx'
import Page3 from './components/page3.jsx'
import Page4 from './components/page4.jsx'

import { zeppelinSolidityHotLoaderOptions } from '../config/webpack'

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    loading: true,
    delivered: null,
    winningSupplier: null,
    suppliers: [],
    route: window.location.pathname.replace('/', ''),
  }

  getGanacheAddresses = async () => {
    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3()
    }
    if (this.ganacheProvider) {
      return await this.ganacheProvider.eth.getAccounts()
    }
    return []
  }

  componentDidMount = async () => {
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled
    let Treasury = {}
    this.setState({ loading: true })
    try {
      Treasury = require('../../contracts/Treasury.sol')
    } catch (e) {
      console.log(e)
    }
    try {
      const isProd = process.env.NODE_ENV === 'production'
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3()
        let ganacheAccounts = []
        try {
          ganacheAccounts = await this.getGanacheAddresses()
        } catch (e) {
          console.log('Ganache is not running')
        }
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts()
        // Get the contract instance.
        const networkId = await web3.eth.net.getId()
        const networkType = await web3.eth.net.getNetworkType()
        const isMetaMask = web3.currentProvider.isMetaMask
        let balance =
          accounts.length > 0
            ? await web3.eth.getBalance(accounts[0])
            : web3.utils.toWei('0')
        balance = web3.utils.fromWei(balance, 'ether')
        let instanceTreasury = null
        let deployedNetwork = null

        if (Treasury.networks) {
          deployedNetwork = Treasury.networks[networkId.toString()]
          if (deployedNetwork) {
            instanceTreasury = new web3.eth.Contract(
              Treasury.abi,
              deployedNetwork && deployedNetwork.address
            )
          }
        }

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
          })
        } else {
          this.setState({
            web3,
            ganacheAccounts,
            accounts,
            balance,
            networkId,
            networkType,
            hotLoaderDisabled,
            isMetaMask,
          })
        }

        await this.getSuppliers()
        this.setState({ loading: false })
        function timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms))
        }

        try {
          await this.openSupplierVote()

          await timeout(7000)

          await this.voteForSupplier(
            '0xF14F87C1197dDeaFdFb468703bc95deb7777DaF5',
            '0x8f523dE20479c2747792e2b6dcC5DeB7B0e6eFf0'
          )

          const winningSupplier = await this.calculateChosenSupplier()

          this.setState({ winningSupplier })

          await timeout(7000)

          await this.voteOnDelivered(
            '0xF14F87C1197dDeaFdFb468703bc95deb7777DaF5',
            650,
            600
          )

          const delivered = await this.completeContract()

          this.setState({ delivered })

          await timeout(7000)
          console.log(delivered)
        } catch (e) {
          console.log(e)
        }
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.error(error)
    }
  }

  completeContract = async () => {
    const { contract } = this.state

    return contract.methods.completeContract().call()
  }

  getSuppliers = async () => {
    const { contract } = this.state

    const suppliers = await contract.methods.getSuppliers().call()

    this.setState({ suppliers })
  }

  calculateChosenSupplier = async () => {
    const { contract } = this.state
    try {
      return contract.methods.calculateChosenSupplier().call()
    } catch (e) {
      alert(e.message)
    }
  }

  voteForSupplier = async (fromAddress, supplierAddress) => {
    const { contract } = this.state

    try {
      await contract.methods
        .voteForSupplier(supplierAddress)
        .send({ from: fromAddress })
      return true
    } catch (e) {
      alert(e.message)
      return false
    }
  }

  voteOnDelivered = async (fromAddress, delivered, expected) => {
    const { contract } = this.state

    return contract.methods
      .voteOnDelivered(delivered, expected)
      .send({ from: fromAddress })
  }

  openSupplierVote = async () => {
    const { contract } = this.state

    const votingEndDate = moment().add(1, 'minutes')
    console.log(votingEndDate.unix())
    console.log(moment().unix())

    try {
      await contract.methods.openSupplierVote(votingEndDate.unix()).call()
      return true
    } catch (e) {
      alert(e.message)
      return true
    }
  }

  render() {
    const { loading, suppliers, winningSupplier, delivered } = this.state
    return (
      <div>
        {!loading && !winningSupplier && suppliers && (
          <Page1
            suppliers={suppliers}
            handleSubmit={supplierAddress =>
              this.voteForSupplier('someaddress', supplierAddress)
            }
            daysToVotingClose={'22 days'}
          />
        )}
        {winningSupplier && delivered === null && (
          <Page2
            winningSupplier={winningSupplier}
            deadlineDate={{ date: '21 April 2019' }}
            daysToCompletion={'22 days'}
          />
        )}

        {delivered && <Page4 outcome={'success'} />}
        {delivered === false && <Page4 outcome={'failure'} />}
        {/* <Page3
          handleSubmit={() => {
            console.log('submission complete')
          }}
          booksDeliveredPercentage={'70%'}
          daysToVotingClose={'22 days'}
        /> */}
      </div>
    )
  }
}

export default App
