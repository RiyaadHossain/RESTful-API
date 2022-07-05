const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const userRoute = require("./routes/route")
require("./db/connect") // Connect to Database


app.use(express.json()) // Parse the Doc
app.use("/api", userRoute) // 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
