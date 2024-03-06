const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(
      "mongodb+srv://ezekiel:ezekiel@cluster0.q5q2px4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
