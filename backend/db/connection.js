const mongoose = require("mongoose");
const env = require("dotenv")
env.config()
const establishConnection = () =>{
       const username = process.env.MONGO_USERNAME;
       const password = process.env.MONGO_PASSWORD;
       const cluster = process.env.MONGO_CLUSTER;
       const dbname = process.env.MONGO_DB_NAME;
       try {
         mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.kxmgecx.mongodb.net/${dbname}?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          },err =>{
            if(err) throw err;
            console.log("DB Connection Established");
          })
       } catch (error) {
        return error;
       }
        
}

module.exports = establishConnection;