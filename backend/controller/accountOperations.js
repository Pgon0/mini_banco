'use strict';
const { accounts: _accounts } = require('./../model/accountmodels.js');

// function to mae a withdraw from an account
async function withdraw  (res, req){
    const {accountID, amount} = req.body;
    if (!accountID || !amount){
        return res.status(400).json({error: 'account ID and amount are required'});
    }
    const account = await _accounts.findById(accountID);
    if (!account){
        return res.status(404).status({error: 'Acount not found'});
    }
    if (amount > account.withdrawLimit){
        return res.status(400).json({error: 'withdrawal limit exceeded'})
    }
    if(account.dailyWithdrawals >= 3){
        return res.status(400).json({error: 'daily withdrawal limit reached'})
    }
    account.dailyWithdrawals += 1
    account.balance += amount
    account.lastWithdrawal = new Date();
    await _accounts.update(account);
    return res.status(200).json({message: 'withdrawal successful', account});
}


