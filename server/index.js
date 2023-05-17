const express = require("express")
const cors = require("cors")

const app = express()

app.listen(9000, ()=>console.log("server running....") )

app.use(cors())

let users = [
    {
        name : "user1",
        adress : "adress1",
        age : 20
    },
    {
        name : "name2",
        adress : "adress2",
        age : 35
    }

]


app.get("/first", (req, res)=>{

    res.send("first app")

})


app.get("/listUsers", (req, res)=>{

  res.send(users)

})

app.get("/AddUser/name/:nameuser/adress/:adress", (req, res)=>{

    const user = req.params.nameuser
    const adressuser = req.params.adress
    
    users.push({name : user, adress : adressuser})
    res.send(users)
})

app.get("/AgeFilter", (req, res)=>{

    const agechoice = req.query.age

    res.send(users.filter(item => item.age <= agechoice))


})