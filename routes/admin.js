const express = require( "express" );

const router = express.Router();

const adminControllers = require("../controllers/admin");

router.get("/add-cate", adminControllers.getAddCate);

router.post('/add-cate', adminControllers.postAddCate);

router.get('/all-categories', adminControllers.getAllCategories);

router.get('/add-items', adminControllers.getAddItems);

router.post('/add-items', adminControllers.postAddItems);

router.get('/all-items', adminControllers.getAllItems);

module.exports = router;