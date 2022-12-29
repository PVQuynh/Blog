// connect với mongodb

// getting-started.js
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useCreateIndex: true,
        });
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failure!')
        
    }
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = { connect }