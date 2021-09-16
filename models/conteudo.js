const mongoose =require('mongoose');
const schema = mongoose.Schema

var conteudoSchema = schema({
    titulo:{type:String},
    autor:{type:String}
})

module.exports = mongoose.model('conteudo', conteudoSchema)