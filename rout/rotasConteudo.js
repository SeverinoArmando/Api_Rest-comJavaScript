

module.exports = function(app){
    var conteudoController = require("../controllers/conteudoControler")


    app.route('/')
        .get(conteudoController.todos_conteudos)
        .post(conteudoController.adicionar_conteudo)

    app.route('/conteudo/:conteudoId')
        .get(conteudoController.cada_conteudo)
        .put(conteudoController.atualizar_conteudo)
        .delete(conteudoController.remover_conteudo)
}