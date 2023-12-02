const express = require("express");
const bodyparser = require("body-parser")
const app = express()
app.use(bodyparser.json())

require("./src/db/conn");
const new_reg = require("./src/models/user_registration")

const port = process.env.PORT || 3000;
app.get("/", (req, res) =>
{
    res.send("Hello")
});
app.post("/login", async(req, res) =>
{
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(`${email} and password is ${password}`)
        new_reg .find

    }
    catch(error){
        res.status(400).send("Invalid Email")
    }
})
app.listen(port, ()=> {
    console.log(`Running at port: ${port}`);
});
