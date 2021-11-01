let user = require("./model");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose"); 
app.use(cors());

const router = express.Router();


mongoose.connect("mongodb://127.0.0.1:27017/users", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection wit MongoDB was successful");
});

app.use("/", router); 

router.route("/getData").get(function(req, res) {
    user.find({}, function(err, 
        result) {
    if (err) {   
        res.send(err);
    } else {
        res.send(result)
    }
});
}).pretty();

app.listen(PORT, function() {
    console.log("Server is running on port: "+ PORT);
});