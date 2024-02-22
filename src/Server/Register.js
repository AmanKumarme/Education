import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const registrationSchema = new mongoose.Schema({
    name: String,
    date: String,
    age: String,
    gender: String,
    address:String,
    courses: String
});

const Registration = mongoose.model('registrations', registrationSchema);
var postedData = [];
async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        //  await Registration.insertMany(student1);
        console.log(`MongoDB host: ${mongoose.connection.host}`);
        // console.log(data);
        server.post('/demo',async (req,res)=> {
            try {
                var registration = new Registration();
                registration.name = req.body.name;
                registration.email = req.body.email;
                registration.date = req.body.date;
                registration.age = req.body.age;
                registration.gender = req.body.gender;
                registration.address = req.body.address;
                registration.courses = req.body.courses;
                console.log("Registration Obj : ",registration);
                
                const doc = await registration.save();
                postedData.push(doc);
                res.json(doc);
                sendMail(req.body);
                sendMailUser(req.body);
            } catch (error) {
                console.error("Error saving registration data:", error);
                res.status(500).json({ error: "Failed to save registration data" });
            }
         
            // console.log(res);
        })
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
    } 
}

main();


const sendMail = (data) => {

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohit.mohit979@gmail.com',
      pass: 'wuhp iewj apbv nvnx'
    }
  });
  
  var mailOptions = {
    from: data.email,
    to: 'mohit.mohit979@gmail.com , paramcomputers.jhs@gmail.com',
    subject: 'Mail Regards Admission of Students',
    text: "A new Student with name : "+ data.name + " , Date of Birth : " + data.date + " , Age : " + data.age + " , Gender : " + data.gender + " , Address : " + data.address + " , Course : " + data.courses + " , Email : " + data.email,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

const sendMailUser = (data) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mohit.mohit979@gmail.com',
          pass: 'wuhp iewj apbv nvnx'
        }
      });
      
      var mailOptions = {
        from: 'mohit.mohit979@gmail.com',
        to: data.email,
        subject: 'Mail Regards Registration',
        text: "Thanyou for Registration",
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    }
    
const server = express();
const port = 3000;
server.use(cors());

server.use(bodyParser.json());


server.get('/demo',(req,res) => {
    res.json(postedData);
})
server.listen(port, () => {
    console.log(`Successfully running on port ${port}`);
});