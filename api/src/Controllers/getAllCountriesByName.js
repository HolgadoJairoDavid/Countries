const {Country}= require("../db");
const { Op } = require("sequelize");


const getAllCountriesByName = async (req, res)=> {
    console.log('ESTOY EN LA FUNCIÓN KPO')
    try {
        const {name} = req.query
        
        const countries = await Country.findAll({where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }})

        console.log(countries)
        if(countries && countries.length > 0){
            return res.status(200).json(countries)
        } else {
            return res.status(404).json({message: 'No se encontraron países que coincidan con el nombre proporcionado'})
        }      

    } catch (error) {
        return res.status(500).json({message: 'Ocurrió un error al buscar los países'})
    }
}

module.exports = getAllCountriesByName;