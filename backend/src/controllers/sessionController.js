const connection = require('../database/connection');

module.exports =    {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            response.status(400).json({ error: 'Nenhuma ong com esse id' });
        }
    
        return response.json(ong);
    }


}