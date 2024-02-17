const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("./routes/v1");
app.use(express.json());

app.use("/v1",routes);
app.use(cors());
app.options("*", cors());
// app.get('/', (req, res) => {
//   console.log("hello")
//   res.send("projects");
// });

// app.post('/projects', (req, res) => {
//   res.send("project");
// });

module.exports = app;

