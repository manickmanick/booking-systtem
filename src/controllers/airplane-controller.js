const {AirplaneService} = require("../services")


/**
 * POST
 * @param {*} req 
 * @param {*} res 
 */
async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        return res.status(200).json({success:true,message:"airplane was created successfully"});

    } catch (error) {
        return res.status(500).json({message:"internal server error",success:false})
    }
}

module.exports = {
    createAirplane
}