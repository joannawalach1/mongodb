const mongoose = require("mongoose"); 
const Schema =mongoose.Schema;

let user = new Schema({
    name: {
type: String
    }
});

module.exports = mongoose.model("user", user);
   