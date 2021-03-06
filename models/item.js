const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        required: true        
    },
    date: {
        type: Date,
        default: Date.now
    }
});

Item = mongoose.model('Item', ItemSchema);

module.exports = Item;