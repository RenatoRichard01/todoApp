const Todo = require('./todo')

Todo.methods(['get', 'post','put','delete'])
//necessario pois, após um put, o node não atualiza sozino
Todo.updateOptions({new: true, runValidators:true})

module.exports = Todo