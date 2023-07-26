const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    var url =
      "mongodb+srv://edgar:Poly123.wqz@cluster0.xziwwxk.mongodb.net/?retryWrites=true&w=majority";
    process.env.MONGODB_URL = url;
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
