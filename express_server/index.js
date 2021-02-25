//requerimiento de express
const express = require('express')

//se crea una variable con app donde este nos va a reemplzar el createServer
const app = express()

app.use(express.json())

const notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:31.098Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP",
        date: "2019-05-30T19:20:31.098Z",
        important: true
    }
]
//rutas de http

//El método GET  solicita una representación de un recurso específico. 
//Las peticiones que usan el método GET sólo deben recuperar datos.

//HOME
app.get('/', (req,res) => {
    res.send("<h1>Hello World </h1>")
})

//GET NOTES
app.get('/api/notes', (req,res) => {
    res.json (notes) 
})

//GET  NOTES ID
app.get('/api/notes/:id', (req,res) => {
    //console.log(req.params.id)
    const id = req.params.id
    const note = notes.find(item => item.id === Number(id))
    console.log(note)
    res.status(404).json(note)
})

//DELETE NOTES
app.delete('/api/notes/:id',(req,res) => {
    const id = Number(req.params.id)
    const resultNotes = notes.filter (note => note.id !== id )
    console.log(resultNotes)
    res.status(204).end()
})

//POST NOTES
app.post('/api/notes',(req,res) => {
    const newNotes = req.body
    console.log(newNotes)
    const resultNotes=notes.concat(newNotes)
    console.log(resultNotes)
    res.status(201).json(resultNotes)

})

//Llamando el servidor
const PORT = 8081
app.listen(PORT)
console.log (`Server running ${PORT}`)
