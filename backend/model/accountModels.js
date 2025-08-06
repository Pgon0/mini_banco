 let db = [
    { accountId: 1, name: 'preds', balance: 1000, withdrawLimit: 500, withdrawDailyLimit: 200, dailyWithdrawals: 0 },
 ]


class Account{
    constructor() {
        this.accounts = [
            { id: 1, name: 'John Doe', email: 'jhon@email', balance: 1000, status: 'active', createdAt: new Date(), withdrawalLimit: 500, daylyWithdrawal: 0, lastWithdrawal: null, },
        ];
    }
    
    addAccount(account) {
        this.accounts.push(account);
    }
    
    getAccounts() {
        return this.accounts;
    }
    
    findAccountById(id) {
        return this.accounts.find(account => account.id === id);
    }
}


module.exports = {
    accounts: { 
        findById: async (id) => {
            return db.find(account => account.accountId === id);
        },
        update: async (account) => {
            const index = db.findIndex(acc => acc.accountId === account.accountId);
            if (index !== -1) {
                db[index] = account;
            }
        }
    }
    ,
    Account
: new Account()
};
