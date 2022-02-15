const knex = require('../../database/connection');

const clientes = async (req, res) => {

    try {
        const clientes = await knex("clientes");

        res.status(200).json({
            success: clientes
        })

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

module.exports = clientes;