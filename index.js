const { read } = require('fs')
const http = require('http')

const port = 3000

//Se crea la variable para iniciar el servidor
const server = http.createServer((req, res) => {
    //Aca se ponen las respuestas que nuectro servidor dara al cliente
    console.log(req.method)
    console.log(req.url)
    if(req.method == 'GET' && req.url == '/usuarios'){
        res.end('<h1> Hola mundo</h1>') 
    }
    else{
        res.end()
    }
    
 })

//Se inicia el servidor
server.listen(port, ()=>{
    console.log('Servidor Ok')
})