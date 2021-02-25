//requerimiento de express
const express = require('express')

//se crea una variable con app donde este nos va a reemplzar el createServer
const app = express()

//Compartir un modulo
const users = require('./users.json')
console.log(users)
//rutas de http

//El método GET  solicita una representación de un recurso específico. 
//Las peticiones que usan el método GET sólo deben recuperar datos.

app.get('/', (req,res) => {
    res.send("Bienvenido pero no hay nada aca")
})

app.get('/api/users', (req,res) => {
    res.json (users) 
})

app.get('/api/users/active', (req,res) => {
    res.json(users.filter((user) => user.isActive)) 
})



//Llamando el servidor
const PORT = 8080
app.listen(PORT)
console.log (`Server running ${PORT}`)
