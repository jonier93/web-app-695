import Express from 'express'
import Path from 'path'
import {insert_user, consult_user} from './db.js'

const app = Express()
app.use(Express.static("frontend/build"))
app.use(Express.json())
app.use(Express.urlencoded({}))

const dir_root = Path.resolve()

app.listen('8080', function(){
    console.log("Server has started")
})

app.get('/', function(req, res){
    res.sendFile(dir_root + "/frontend/build/index.html")
})      

app.get("/register", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/consult", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/contact", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.post("/register_user", (req, res) => {
    let {name, id, lastname} = req.body
    insert_user(name, id, lastname)
    res.redirect("/")
})

app.post('/consult_user', function(req, resp) {
    let {id} = req.body
    consult_user(id)
})