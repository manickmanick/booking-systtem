const {ServerConfig,Logger} = require("./config/index");
const express = require("express");
const apiRoutes = require("./routes/index");
const app = express();

app.use(express.json())
app.use("/api",apiRoutes)


  


app.listen(ServerConfig.PORT,()=>{
    console.log("server listening on port : ",ServerConfig.PORT);
    Logger.log({
        level: 'info',
        message: 'What time is the testing at?'
      });
})