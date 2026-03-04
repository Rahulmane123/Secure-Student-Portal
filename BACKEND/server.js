const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const dbconnection = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // <-- React app URL
    credentials: true, // allow cookies
  }),
);

// load dotenv
dotenv.config();
// load dbconnection
dbconnection();

// session setup
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  }),
);

// step;1
app.use("/api/student", studentRoutes);
// localhost://5000/api/student

app.listen(process.env.PORT, () => {
  console.log(`Server runing on port ${process.env.PORT}`);
});
