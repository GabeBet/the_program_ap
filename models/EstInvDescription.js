const mongoose = require('mongoose');

const EstInvDescriptionSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('EstInvDescription', EstInvDescriptionSchema);