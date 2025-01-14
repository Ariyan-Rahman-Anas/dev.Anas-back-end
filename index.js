const express = require("express")
const app = express()
const port = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./src/config/dbConfig");
dbConfig();

const credentialsRouter = require("./src/route/credentialRoute")
const projectsRouter = require("./src/route/projectRoute");

//basic middleware
app.use(express.json())
app.use(
  cors({
    origin: [
      "https://ariyanrahmananas.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/credentials", credentialsRouter);
app.use("/api/projects", projectsRouter);


//root route
app.get("/", (req, res) => {
    res.send({
      message: "Ariyna Rahman Anas's portfolio server is running...",
    });
})

//server testing
app.listen(port, () => {
    console.log(
      `Ariyan Rahman Anas's portfolio server is running on http://localhost:${port} `
    );
});