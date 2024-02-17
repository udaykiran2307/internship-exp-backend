const mongoose = require('mongoose');
const app = require("./app.js")
const dotenv = require('dotenv').config()
const MongoURI = process.env.MongoURI ;
const PORT = process.env.PORT || 8000;

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{
    console.log('MongoDB connection established successfully')
    app.listen(PORT,()=>{
        console.log("server started and listening to the port",PORT);
    })
  })
  .catch(err => console.error('MongoDB connection error:', err));


module.exports={mongoose}
