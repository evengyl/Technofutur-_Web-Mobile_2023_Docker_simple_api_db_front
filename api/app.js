const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const port = process.env.PORT || 3000

const connection = mysql.createPool({
    connectionLimit : 100,
    host : process.env.APP_MYSQL_HOST,
    user : process.env.APP_MYSQL_USER,
    password : process.env.APP_MYSQL_PASSWORD,
    database : process.env.APP_MYSQL_DATABASE
})

app.use(cors())


app.get("/", (req, res, next) => {
    connection.query("select * from student", (err, rows) => {
        if(err)
            res.json({ err })

        else
            res.json({ rows })
    })
})


app.get("/post", (req, res, next) => {
    connection.query("insert into student (student_name, student_age) values('random name', 30)", (err, rows) => {
        if(err)
            res.json({ err })

        else
            res.json({ rows })
    })
})


app.listen(port, console.log(`server start on port : ${port}`))