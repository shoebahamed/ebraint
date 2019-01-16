const mongoose = require('mongoose');
var mysql = require('mysql');

const multer = require('multer');
const jimp = require('jimp');
const uuid=require('uuid');//we can nwrite logic to avoid same file name coflct


exports.homepage = (req,res) =>{
  const query = "SELECT * FROM subjects ";
  db.query(query, (err,subjects) => {
    if(err) throw err;
    console.log(subjects);
    res.render('subjects',{'title':'All Subjects',subjects});

  });
};
