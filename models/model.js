const mongoose = require('mongoose')

const Schema = mongoose.Schema
const modelSchema = new Schema({
  _id:{
    type: String,
    required: [true, 'You must give an id to the record!'],
    minLength: [2, 'Id has to be at least 2 chars long'],
    maxLength: [25, "Id cannot be longer than 25 characters"]
}
})

module.exports = mongoose.model('model', modelSchema, 'models')