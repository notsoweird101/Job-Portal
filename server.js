const express=require("express")
const db=require("./db.js")
const jobsRoute =require('./routes/jobRoutes.js')
const userRoute= require('./routes/userRoute')
const path=require("path");

const app=express()

app.use(express.json())

app.use('/api/jobs/', jobsRoute)
app.use('/api/users/', userRoute)


const port=5000 || process.env.PORT;


if(process.env.NODE_ENV === 'production')
 {
     app.use('/' , express.static('client/build'))

     app.get("*", (req, res) => {

          res.sendFile(path.join(__dirname, 'client/build/index.html'))
       
     });
 }
app.listen(port, ()=> console.log("Server Started"));