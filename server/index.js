const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const dbConnect = require("./dbConnect");
const cloudinary = require("cloudinary").v2;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config("./.env");

// Configuration  of cloudinary :cloudinary is a source to change image at the run time
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
//middleware
//bodyParser in middleware
app.use(express.json({ limit: "20mb" }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Ok from Server");
});

const PORT = process.env.PORT || 4001;
dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
//7KEFMGU8aOOqUb2B
