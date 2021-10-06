import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
const PORT = 3002
app.use(cors())
const connection = mysql.createConnection( {
    host: "localhost",
    user: "postai",
    database: "postai",
    password: "postai_crud",
}) 

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log("PAVYKO!!!!!!!");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/labas', (req, res) => {
  res.send('go awawy')
})
app.get('/labas/:id', (req, res) => {
  res.send(`hello name idi nahuj ${req.params.id}`)
})

app.get("/postai", (req, res) => {
    connection.query("SELECT * from postai", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})