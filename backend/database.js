const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DBusername}:${process.env.DBpassword}@cluster0.uuwptbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
let database;

module.exports = {
  connectToDb: (cb) => {
  mongoose.connect(uri).then((ans) => { 
  console.log("ConnectedSuccessful");
  database = ans;
  return;
}).catch((err) => { 
  console.log("Error in the Connection");
  return;
}) 
  },
  getDb: () => database,
};
