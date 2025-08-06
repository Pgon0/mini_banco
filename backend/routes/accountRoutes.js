let routes = require('express').Router()
let accountOperations = require('../controller/accountOperations');
const { accounts: _accounts } = require('../model/accountmodels.js');

routes.get('/', (req,res)=>{
    res.send('Account Routes Homes')
})


routes.get('/account', async (req, res) => {
    // Espera accountId como parâmetro de consulta, ex: /account?accountId=0
    const accountId = req.query.accountId;
    if (!accountId) {
        return res.status(400).json({ error: 'No accountId provided in query parameters.' });
    }

    const account = await _accounts.findById(Number(accountId));
    if (!account) {
        return res.status(404).json({ error: 'Account not found.' });
    }

    res.json({
        name: account.name,
        accountId: account.accountId,
        balance: account.balance,
        withdrawLimit: account.withdrawLimit,
        withdrawDailyLimit: account.withdrawDailyLimit,
        dailyWithdrawals: account.dailyWithdrawals
    });
});

module.exports = routes