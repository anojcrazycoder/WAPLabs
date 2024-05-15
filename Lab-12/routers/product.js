const express=require('express');
const path=require('path')

const router=express.Router();
router.get('',(req,res,next)=>{
    res.sendFile((path.join(__dirname,'..','views','products.html')));
});

router.get('add-product',(req,res)=>{
    res.sendFile((path.join(__dirname,'..','views','productCreate.html')));
})
router.post('',express.urlencoded({ extended: true }),(req,res,next)=>{
    products.push(req.body);
    console.log("Product has been added to list");
    console.log(products);
    res.sendFile((path.join(__dirname,'..','views','products.html')));
});

module.exports=router;