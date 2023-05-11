const findAllCountriesByName = require('../Helpers/findAllCountriesByName')

const getAllCountriesByName = async (req, res)=> {

    try {
        const {name} = req.query
        
        const countries = await findAllCountriesByName(name)
        
        if(countries && countries.length > 0){
            return res.status(200).json(countries)
        } else {
            return res.status(404).json({error: 'No se encontraron países que coincidan con el nombre proporcionado'})
        }      

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getAllCountriesByName;