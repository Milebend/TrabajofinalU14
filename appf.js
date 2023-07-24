// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 

const express = require('express')
const server = express()

server.set("view engine", "ejs")


const PORT = process.env.PORT || 8080
const modelo = require('./database/db')
const crud = require('./controller/crudf')

server.use(express.urlencoded({extended:false})) // enviar parametros
server.use(express.json())
server.use(express.static('./database'))    //modelo
server.use(express.static('./public')) 
server.use(express.static('./views'))       //vista


//Inicio Rutas

server.get('/', (req,res) =>{
    res.render('home')
})

server.get('/indexf', crud.consultar)
server.get('/crear', (req,res) =>{
    res.render('createf')
})
server.get('/indexpac', crud.consultar1) // paciente
server.get('/crear2', (req,res) =>{    
    res.render('createpac')
})
server.post('/salvar',crud.save)

server.post('/salvar2',crud.save1) // paciente

server.get('/indexcita', crud.consultarcita) // cita
server.get('/crear3', (req,res) =>{
    res.render('createcita')
})

server.post('/salvar3',crud.save3) // cita


// FIN DE LAS RUTAS

// APIS
server.get('/api/doctores', crud.api_consultatodos)
server.get('/api/personas', crud.api_consultatodos1)//pacientes
server.post('/api/citas', crud.api_consultatodos2) // citas

server.post('/api/agregardoc/',crud.api_agregar)
server.post('/api/agregarpac/',crud.api_agregar1) // pacientes
server.post ('api/agregacita', crud.api_agregar2) // citas


server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})

//module.exports = { server}