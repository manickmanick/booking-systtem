const {PORT} = require("./config/index");
const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();

app.use("/api",apiRoutes)

console.log(PORT);


app.listen(PORT,()=>{
    console.log("server listening on port : ",PORT);
})