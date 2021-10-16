const mongoose = require("mongoose");

mongoose.connect(
  " mongodb+srv://dailyroutine:KC2WMkXiN7sTIiTh@cluster0.htlt7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
