const express = require("express");

const mongoose = require("mongoose");
const fruitsRouter = require("./routes/fruitsRoute");
const demoRouter = require("./routes/demoRouter");
const veggiesRouter = require("./routes/veggiesRoure");
const contact = require("./routes/contactRoute");
const sellerRoute = require("./routes/sellerRoute");
const userRouter = require("./routes/userRouter");
const cartRouter = require("./routes/cartRouter");

const cors = require("cors");

require("dotenv").config();

const app = express();

//changing the format to json
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Routes

app.use("/", fruitsRouter);
app.use("/veggie", veggiesRouter);
app.use("/seller", sellerRoute);
app.use("/demo", demoRouter);
app.use("/users", userRouter);

app.use("/cart", cartRouter);

app.use("/contact", contact);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("hello running");
    app.listen(process.env.PORT);
  });
