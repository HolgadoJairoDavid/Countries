const {Activity} = require('../db')

const getActivity = async (req, res) => {
    const {id} = req.params
    try {
        const activity = await Activity.findByPk(id)
        return res.status(200).json(activity)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = getActivity