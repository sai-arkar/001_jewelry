const Categories = require("../models/categories");

exports.getIndex = (req, res, next)=>{
     res.render('shop/index');
};

