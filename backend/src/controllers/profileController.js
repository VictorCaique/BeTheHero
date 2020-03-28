const connection = require('../database/connection.js');

module.exports = {
    async index(request, response){
        const ongid  = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ongid)
        .select('*');

        return response.json(incidents);
    }

}