const userModel = require("../models/userModel");
const connectDb = require("./dbConnect.js");

const seedData = async () => {
  try {
    await userModel.deleteMany({});
    const user = new userModel({
      firstname: "edgar",
      lastname: "javier",
      email: "edgar@gmail.com",
      mobile: "951954633",
      password: "qwerty",
      role: "admin",
      isBlocked: false,
      // cart: "Tony Stark",
      address: "test",
      wishlist: [],
    });
    user.save();
  } catch (err) {
    console.error(err);
  }

  console.log("Mock data is seeded from seed script.");
};
connectDb();
seedData();
