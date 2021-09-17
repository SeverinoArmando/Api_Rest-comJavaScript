const mongoose = require('mongoose');
var conteudo =mongoose.model('conteudo')

//criando request do get all
exports.todos_conteudos = function(req,res){
    conteudo.find({},(erro,conteudos)=>{
        if(erro){
            res.send(erro)
        }
        res.json(conteudos)
    })
}


//get do id

exports.cada_conteudo = (req,res)=>{
    conteudo.findOne({"_id":req.params.conteudoId},(erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        res.json(conteudo)
    })
}
   
//post
exports.adicionar_conteudo = (req,res)=>{
    var novo_conteudo = new conteudo(req.body)
    novo_conteudo.save(function(erro,conteudo){
        if(erro){
            res.send(erro)
        }
        res.json(conteudo)
    })
}

//put

exports.atualizar_conteudo = (req,res)=>{
    conteudo.findOneAndUpdate({_id:req.params.conteudoId}, req.body,{new:true},
        function(erro,conteudo){
            if(erro){
                res.send(erro)
            }
            res.json(conteudo)
            
        })
}


//delete
exports.remover_conteudo = (req,res)=>{
    conteudo.remove({_id:req.params.conteudoId}, (erro,conteudo)=>{
        if(erro){
            res.send(erro)
        }
        res.json({"mensagem":"Conteúdo deletado com sucesso"})
    })
}