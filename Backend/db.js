const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/expense");

module.exports = mongoose;