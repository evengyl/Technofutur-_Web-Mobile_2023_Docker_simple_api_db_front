const express = require("express")
const app = express()
const port = process.env.PORT || 3000


app.get("/test", (req, res, next) =>{
    res.json({
        msg : "bonjour"
    })
})


app.listen(port, console.log(`Server démarré sur le port ${port}`))
