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


app.get("/postai", (req, res) => {
    connection.query("SELECT * from postai order by id desc", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})

app.get("/postai/:id", (req, res) => {
    connection.query("SELECT * from postai order by id desc", (err, result)=> {
        if (err) {
            throw err
        }
        res.json(result);
    })
})


app.post('/postai/', (req, res) => {
  let sql = `
    insert into postai
    (title, body)
    values  (?, ?)
  `
  connection.query(sql,[req.body.data.title, req.body.data.body], (err,result) => {
    if (err) {throw err}
    res.send(result)
  })
})

app.delete('/postai/:id', (req, res) => {
  let sql = `
    delete from postai
    where id = ?
  `
  connection.query(sql,[req.params.id], (err,result) => {
    if (err) {throw err}
    res.send(result)
    console.log("Deleted");
  })
})

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/postai/:id', (req, res) => {
  let sql = `
    update postai
    set title = ?, body = ?
    where id = ?
  `
  connection.query(sql,[req.body.data.title, req.body.data.body,req.params.id], (err,result) => {
    if (err) {throw err}
    res.send(result)
    console.log("updated!");
  })
})


app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})