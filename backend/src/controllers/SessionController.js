const User = require('../models/User');

//index: retornar uma listagem de sessões
//show: lista uma unica sessão
//store: criar uma unica sessão
//update: alterar uma sessão
//destroy: excluir uma sessão
module.exports = {
    async store(req, res){
        const { email } = req.body;
        //tratamento para 
        let user = await User.findOne({
            email
        })
        if(!user){
            user = await User.create({ email });
        }
        //sem tratamento: const user = await User.create({ email });
        
        return res.json(user);
    }
};