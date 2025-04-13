const express = require("express");
const colors = require('colors');
const dotenv = require('dotenv')
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path=require('path');
//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
//test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'))
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 8080;
const DEV_MODE = process.env.DEV_MODE

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgBlue
      .white
  );
});
