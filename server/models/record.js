const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
   title: {
       type: String,
   },
   body: {
       type: String,
   },
   author: {
       type: String,
   },
   source: {
       type: String,
   },
   publicationDate: {
       type: Date
   }
});

const Record = mongoose.model('record', RecordSchema);

module.exports = Record;