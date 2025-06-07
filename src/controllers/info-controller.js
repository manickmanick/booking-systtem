const {StatusCodes} = require("http-status-codes");

module.exports = {
    info:async(req,res)=>{
        return res.status(StatusCodes.OK).json({success:true,message:"API is live",error:{},data:{}})
    }
}