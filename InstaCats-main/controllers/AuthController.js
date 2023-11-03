// 1 - Preciso importar o arquivo de modulo
 const User = require('../models/User')

module.exports = class AuthController{
    static login(require, response){
        //render -> diretório do projeto - nomeArquivo
        //redirect -> Mandar para uma rota - /
        return response.render('auth/login')
    }
    static register(require, response){
        response.render('auth/resgister')
        return
    }
    static async registerPost(){}
}