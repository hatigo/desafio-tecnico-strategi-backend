const knex = require('../../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../../config/config');
const loginSchema = require('../../validations/loginSchema');


const login = async (req, res) => {
    const { nome, senha } = req.body;

    console.log("eae");

    try {

        await loginSchema.validate(req.body);

        const findUsername = await knex("corretores").where('nome', nome);

        if (findUsername.length === 0) {
            return res.status(400).json({ error: 'usuário não encontrado' });
        }

        const foundUser = findUsername[0];
        const checkPassword = await bcrypt.compare(senha, foundUser.senha);

        if (!checkPassword) {
            return res.status(400).json({ error: 'senha incorreta' });
        }

        const token = jwt.sign(
            nome,
            secret,
            { expiresIn: '1d' }
        )

        return res.status(200).json({
            success: 'login efetuado com sucesso',
            token: token,
            dadosDoUsuario: { nome: nome }
        })


    } catch (error) {
        res.status(400).json({ error: error });
    }


}


module.exports = { login };