const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://ReckUsers:7KEFMGU8aOOqUb2B@cluster0.k2k1d0c.mongodb.net/?retryWrites=true&w=majority";
  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
