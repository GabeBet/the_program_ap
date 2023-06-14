const mongoose = require('mongoose');

const BankStatementSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    debitCredit: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    projectNumber: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BankStatement', BankStatementSchema);