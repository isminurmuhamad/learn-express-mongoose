const mongoose = require('mongoose')

const germanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama tidak boleh kosong']
    },
    location: {
        type: String
    },
    contact: {
        type: String,
        required: [true, 'Kontak tidak boleh kosong']
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Garment = mongoose.model('Garment', germanetSchema)

module.exports = Garment