const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JusticeListSchema = new Schema({
    title: {
        type: String,
    },
    list: {
        type: [String],
    },
});

const JusticeList = mongoose.model('justice-list', JusticeListSchema);

module.exports = JusticeList;

