const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const MONGODB_URI ='mongodb+srv://root:root@cluster0.hl7kn.mongodb.net/jewelry?retryWrites=true&w=majority';

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use(shopRoutes);
app.use("/admin", adminRoutes);

mongoose.connect(
     MONGODB_URI,
     {useNewUrlParser: true, useUnifiedTopology: true}
   )
     .then(result => {
       console.log('Connected!')
       app.listen(process.env.PORT || 3000);
     })
     .catch(err => {
       console.log(err);
     });