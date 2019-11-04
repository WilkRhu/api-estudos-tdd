const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cpf: {
    type: String, unique: true, required: true, min: 1, max: 11,
  },
  rg: {
    type: String, required: true, min: 1, max: 7,
  },
  created: { type: Date, default: Date.now },
});


module.exports = mongoose.model('User', UserSchema);
