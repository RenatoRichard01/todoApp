module.exports = function(request, response, next){
    //origem qualquer *
    response.header('Acess-Control-Allow-Origin', '*')
    //metodos que irei permitir acesso
    response.header('Acess-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE')
    response.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept')
    next()
}