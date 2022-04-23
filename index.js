const express = require("express");
const app = express();
const home = require('./route/home')
app.use(home)
app.use(express.json())

app.get("/", (req, res) => {
  res.send("its dhara's property");
 });


//to set port => $env:PORT=5000
const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`Listening to ${port}`))


// http://localhost:4000/api/users/3