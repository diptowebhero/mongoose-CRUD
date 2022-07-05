const mongoose = require("mongoose");

// const connectMongoose = () => {
//   mongoose
//     .connect("mongodb://127.0.0.1:27017/todo")
//     .then(() => console.log("Successfully connect Mongoose"))
//     .catch((error) => console.log(error));
// };

const connectMongoose = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connect Mongoose");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoose;
