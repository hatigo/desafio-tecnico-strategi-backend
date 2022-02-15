const knex = require('../../database/connection');


const deleteCliente = async (req, res) => {
    const { id } = req.params;

    const clienteDeletado = await knex("clientes").del().where({id});

    if(clienteDeletado === 0){
        return res.status(400).json({
            error: "não foi possivel deletar o cadastro do cliente, tente novamente"
        })
    }

    res.status(200).json({
            success:"cadastro do usuario deletado com sucesso"
    })

}

module.exports = deleteCliente;