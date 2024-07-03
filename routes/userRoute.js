const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
    console.log(req.body)
    try {
        
        const newUser = new User(req.body)
        const user = await newUser.save();
        res.send('User Created SuccessFully')
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user= await User.findOne({username: req.body.username, password : req.body.password})
        if(user) {
            var obj={
                "_id": user._id,
                "username":user.username,
                "firstName":user.firstName,
                "lastName":user.lastName,
                "mobileNumber":user.mobileNumber,
                "portfolio":user.portfolio,
                "about":user.about,
                "address":user.address,
                "education":user.education,
                "skills":user.skills,
                "projects":user.projects,
                "experience":user.experience,
                "appliedJobs": user.appliedJobs,
                "createdAt":user.createdAt
            }
            res.send(obj)
        }
        else{
            return res.status(400).json({message: 'Invalid Credentials'});
        }
    } catch (error) {
        return res.status(400).json(error);
    }
});


router.post("/update", async (req, res) => {
    try {
      await User.findOneAndUpdate({ _id: req.body._id }, req.body);
  
      const user = await User.findOne({ _id: req.body._id });
  
      res.send(user);
    } catch (error) {
      return res.status(400).json({ error });
    }
  });
  

  
  router.get("/getallusers", async(req, res) => {
  
    try {  
        const all=[];
        const users = await User.find()
        for(var user of users){
            var obj={
                "_id": user._id,
                "username":user.username,
                "firstName":user.firstName,
                "lastName":user.lastName,
                "mobileNumber":user.mobileNumber,
                "portfolio":user.portfolio,
                "about":user.about,
                "address":user.address,
                "education":user.education,
                "skills":user.skills,
                "projects":user.projects,
                "experience":user.experience,
                "appliedJobs": user.appliedJobs,
                "createdAt":user.createdAt
            }
            all.push(obj);
            }

        res.send(all)
    } catch (error) {
        return res.status(400).json({ error });
    }
  
  });
  

module.exports = router