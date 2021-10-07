import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
const PORT = 3002
app.use(cors())
app.use(express.urlencoded( {
  extended:true
}))
app.use(express.json());
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


app.get('/labas', (req, res) => {
  res.send('go awawy')
})
app.get('/labas/:id', (req, res) => {
  res.send(`hello name idi  ${req.params.id}`)
})

app.post('/postai/', (req, res) => {
  console.log(req.body.data.body)
  let sql = `
    insert into postai
    (title, body)
    values  ('${req.body.data.title}', '${req.body.data.body}')
  ` 
  connection.query(sql, (err,result) => {
    if (err) {throw err}

    res.send(result)
  })

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