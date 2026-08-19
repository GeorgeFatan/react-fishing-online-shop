const express = require("express"); // frameworku express pt server http
const cors = require("cors"); /// cors ( permite cereri frontend => backend)
// common js import

const app = express(); // aplicatia express
app.use(cors()); // activam cors
app.use(express.json()); // permite backend sa primeasca JSON in bodyu cererilor

app.get("/", (req, res) => {
  // test
  res.send("Backend-ul functioneaz!!!!!");
});

// pornim serverul pe portul 5000
app.listen(5000, () => console.log("Serverul ruleaza pe portul 5000"));
