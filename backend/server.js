const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./routes/productRoute");
const notFoundError = require("./middleware/errorsMiddleware").notFoundError;
const serverError = require("./middleware/errorsMiddleware").serverError;

dotenv.config();

const app = express();

// connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("db connected"))
  .catch((e) => console.log(`error-> ${e}`));

app.get("/", (req, res) => {
  res.send("hellooo");
});

app.use("/api/products", productRouter);

// 404 error
app.use(notFoundError);

// error code handling
app.use(serverError);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("app is running"));
