const express = require("express");
const Joi = require("joi")
const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "dhara",
  },
  {
    id: 2,
    name: "dhara2",
  },
  {
    id: 3,
    name: "dhara3",
  },
];

app.get('/api/users',(req,res)=>{
    res.send(users)
})
app.get('/api/users/:id',(req,res)=>{
    // res.send(req.params.id)
const user = users.find((c)=>c.id === parseInt(req.params.id))
if(!user) return res.status(400).send("ab toh id b nhi milrhi ! kya kru marjao?");
res.send(user)

})
app.post('/api/users',(req,res)=>{
    const { error } =validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const user= {
        id:users.length+1,
        name:req.body.name,
    }
    users.push(user)
    res.send(user)

})
app.put('/api/users/:id', (req,res)=>{
    const user = users.find((c)=>c.id === parseInt(req.params.id))
    if (!user) return res.status(400).send("jani id toh sahi daal ")

    const {error} = validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    user.name = req.body.name ;
    res.send(user)
})
app.delete('/api/users/:id',(req,res)=>{
    const user = users.find((c)=>c.id === parseInt(req.params.id))
    if(!user) return res.status(400).send("id sahi nhi")

    const index = users.indexOf(user)
    users.splice(index,1)

    res.send(user)


})
function validateUser(data){
    const schema = Joi.object({name : Joi.string().min(3).required()})
    return schema.validate(data)
}
//to set port => $env:PORT=5000
const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`Listening to ${port}`))


// http://localhost:4000/api/users/3