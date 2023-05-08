const { Activity } = require("../db");

const getAllActivities = async (req, res)=>{
    try {
        const results = await Activity.findAll()
        if(results.length > 0){
            return res.status(200).json(results)
        } else {
            throw Error('Aún no has creado actividades')
        }
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

module.exports= getAllActivities