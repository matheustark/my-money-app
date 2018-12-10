const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.explore = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatório "
mongoose.Error.messages.Number.min = 
    " O '{VALUE}' informado é menor que o liminte mínimo de '{MIN}'. "
mongoose.Error.messages.Number.max = 
    " '{VALUE}' nao é valido para o atributo '{PATH}'. "
mongoose.Error.messages.String.enum = 
" '{VALUE}' não é valido para o atributo '{PATH}'. "