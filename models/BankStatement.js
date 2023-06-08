const mongoose = require('mongoose');

const BankStatementSchema = mongoose.Schema({
    date: {
        type: String
    },
    description: {
        type: String
    },
    amount: {
        type: String
    },
    debitCredit: {
        type: String
    },
    category: {
        type: String
    },
    projectNumber: {
        type: String
    }
})

module.exports = mongoose.model('BankStatement', BankStatementSchema);