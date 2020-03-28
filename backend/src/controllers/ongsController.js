const connection = require('../database/connection.js');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
    const {nome, email, city, uf, whatsapp} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        nome,
        email,
        city,
        uf,
        whatsapp,
    })
    return response.json({ id });
    },
    
    async list(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }

}

