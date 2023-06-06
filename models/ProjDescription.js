const mongoose = require('mongoose');

const ProjDescriptionSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ProjDescription', ProjDescriptionSchema);