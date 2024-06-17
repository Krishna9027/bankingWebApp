const express = require("express");
const Customer = require("../models/customer");
const router = express.Router();

router.get("/", async (req, res ,next) => {
  const customers = await Customer.find({});
  console.log(customers)
  res.send(customers);
});

router.post("/", async (req, res,next)=>{
    console.log(req.body);
    const {serialnumber}=req.body;
    console.log(serialnumber);
     const newCustomer = await new Customer({
       serialnumber:serialnumber,
       name: req.body.name,
       accountnumber: req.body.accountnumber,
       balance: req.body.balance,
     });
     const savednewCustomer = await newCustomer.save();
     res.send(savednewCustomer);
})

module.exports = router;
