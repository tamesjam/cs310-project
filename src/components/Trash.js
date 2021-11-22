// const network_id = await web3.eth.net.getId();

    // const dappToken = new web3.eth.Contract(DappToken.abi, this.state.address);
    // var dappToken = new Contract(DappContract.abi, this.state.address);
    // const balance = await dappToken.methods.balanceOf(this.state.account).call()
    // try{
    // const name = await dappToken.methods.getName().call();
    // console.log(name);
    // this.setState({ balance: balance.toString() })
    // const balance2 = await dappToken.methods.balanceOf(this.state.account).call();

    // console.log(dappToken);
    // dappToken.methods.balanceOf("0x7a044b7743f4fEFDae4B7e03542F3808DE583D85").call((error, balance) => {
    //     balance2 = balance;
    //     console.log(balance);
    //     // dappToken.methods.decimals().call((error, decimals) => {
    //     //   balance = balance.div(10 ** decimals);
    //     //   console.log(balance.toString());
    //     // });
    // });
    // const toWei = web3.utils.toWei(balance2.toString(), 'Ether');
    // console.log(balance2);
    // console.log(toWei);
    // console.log(web3.utils.toWei(String(balance2), 'ether'));

    // this.setState({ dappToken });

    // var accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    // const balance = await web3.eth.getBalance(this.state.account);
    // this.setState({ balance: balance.toString() });

    const recipient = this.recipient.value
                  const amount = window.web3.utils.toWei(this.amount.value.toString(), 'Ether')
                  this.transfer(recipient, amount)