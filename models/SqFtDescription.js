const mongoose = require('mongoose');

const SqFtDescriptionSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SqFtDescription', SqFtDescriptionSchema);