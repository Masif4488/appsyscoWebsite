
const express = require('express');
const formRoutes = express.Router();
const Form = require('../model/Form');
const nodemailer = require('nodemailer');
const mailID = 'checkdeveloper001@gmail.com' ;
const password = 'developer@123'
formRoutes.route('/quoteForm').post((req,res) =>{
  const quoteForm = new Form({
    name: req.body.name,
    email: req.body.email,
    contact_number : req.body.contact_number,
    message : req.body.message
  });
  Form.findOne({email: quoteForm.email}, (err,result) =>{
    if (result){
      console.log(result);
      console.log('The email address you have entered is already associated');
      return res.json('The email address you have entered is already associated');
    }
    else{
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          accessToken: 'ya29.Glt-BySzkfmQlnxIcdhndhjvLkuinAgh5ctWDnVGHMqASlddiTdvCpqhvIDJo4pmIixKrvDLpavrQrCqWSwGIIr5FUyf7oqNjfW8ax3_rYtUs26OxDH1Ce-HQZth',
          user: mailID,
          pass: password,
          expires: 1484314697598
        }
      })
      const mailOption = {
        from: mailID,
        to: quoteForm.email,
        subject: quoteForm.name,
        text: quoteForm.message,
      }
      transporter.sendMail(mailOption,(err,info) =>{
        if(err){
          console.log(err);
        }
        else console.log("Message sent successfully: " + info.response);
       });
       transporter.close();
      quoteForm.save()
      .then(quoteForm =>{
        console.log('Message has been successfully sent!!');
        return res.json('Message has been successfully sent!!');
      }).catch(err =>{
      });
    }
  })
});

module.exports = formRoutes;
