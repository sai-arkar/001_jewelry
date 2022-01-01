const Categories = require("../models/categories");
const Items = require("../models/items");

exports.getAddCate = (req, res, next)=>{
     res.render('admin/edit-cate');
};

exports.postAddCate = (req, res, next)=>{
     const title = req.body.title;
     console.log(title);
     const categories = new Categories({
          title: title
     });
     categories.save()
          .then(result=>{
               console.log("Category Created!");
               res.redirect('/admin/add-cate');
               // res.status(201).json({
               //       result: result.title
               // });
          })
          .catch(err=>{
               console.log(err);
          })
};

exports.getAllCategories = (req, res, next)=>{
     Categories.find()
          .then(result=>{
               res.status(200).json({
                    result : result
               })
          })
          .catch(err=>{
               console.log(err);
          })
}

exports.getAddItems = (req, res, next)=>{
     Categories.find()
          .then(result =>{
               // console.log(result);
               res.render('admin/edit-items', {
                    categories: result
               });
          })
          .catch(err=>{
               console.log(err);
          })
}

exports.postAddItems = (req, res, next)=>{
     const categoryId = req.body.categoryId;
     const title = req.body.title;
     const description = req.body.description;
     const price = req.body.price;
     const itemRemain = req.body.itemRemain;
     
     const item = new Items({
          categoryId : categoryId,
          title: title,
          description: description,
          price : price,
          itemRemain: itemRemain
          
     });
     item.save()
          .then(result=>{
               console.log("Add Item Successfully!");
               res.redirect("/admin/add-items");
          })
}

exports.getAllItems = (req, res, next)=>{
     Items.find()
          .then(result=>{
               res.status(200).json({
                    result: result
               })
          })
          .catch(err=>{
               console.log(err);
          })
}