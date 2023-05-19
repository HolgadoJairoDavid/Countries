const findAllActivities = require('../Helpers/findAllActivities')

const getAllActivities = async (req, res)=>{
    try {
        const results = await findAllActivities()
        if(results.length > 0){
            return res.status(200).json(results)
        } else {
            return res.status(404).json([{message: 'Aún no has creado actividades'}])
        }
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports= getAllActivities