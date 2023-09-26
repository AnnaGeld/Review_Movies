import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import reviewRoute from "./routes/reviews.js";
import movieRoute from "./routes/movies.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("api is working");
});

//database connection
mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is connected");
  } catch (error) {
    console.log(`MongoDB NOT CONNECTED ${error}`);
  }
};

//middlewear
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/rewievs", reviewRoute);

app.listen(port, () => {
  connectDb();
  console.log(`server is running on port ${port}`);
});
