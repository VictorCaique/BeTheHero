const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        const {title, decription, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            decription,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async list(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count()
        console.log(count);

        const incidents = await connection('incidents')
        .limit(5)
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .offset((page - 1)*5)
        .select(['incidents.*', 
        'ongs.nome', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.email', 
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json( incidents );
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operação não permitida'});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(201).send();
    }
}