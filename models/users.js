const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    location: String,
    nativeLang: String,
    targetLang: String,
    interests: String,
})

module.exports = mongoose.model('User', UserSchema)