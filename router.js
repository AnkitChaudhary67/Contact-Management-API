const express=require('express');
const router=express.Router();

const Contact = require('./model/Contact');


  router.post('/v1/contacts', async (req, res) => {
    const recipe = new Contact({
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    });
  
    try {
      const newContact = await recipe.save();
      res.status(201).json(newContact);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


  router.get('/v1/contacts', async (req,res)=>{
    const contacts = await Contact.find();
    if (contacts.length > 0) {
        res.send(contacts)
    } else {
        res.send({ result: "No Contact found" })
    };
})

router.get('/v1/contacts/:id', async(req,res)=>{
    try {
        const { id }=req.params;
            const getContact=await Contact.findById(_id,id)
              console.log(getContact);
              res.status(201).json(getContact) 
    } catch (error) {
        res.status(404).send("There is no contact with that id")
    }
});

router.delete('/v1/contacts/:id',async(req,res)=>{
   
    try{
        let deleteContact=await Contact.deleteOne({_id:req.params.id});
        res.status(204).send("delete")
        console.log(deleteContact);
    }catch(e){
        res.status(400).send("There is no contact with that id")
    }
});

router.put('/v1/contacts/:id',async(req,res)=>{
    try{
        let updateContacts=await Contact.updateMany({_id:req.params.id});
        console.log(updateContacts);
        res.status(204).send("updated")

    }catch(e){
        res.status(400).status("There is no contact with that id")
    }
});

router.patch('/v1/contacts/:id',async(req,res)=>{
    try{
        let updateContact=await Contact.updateOne({_id:req.params.id});
        console.log(updateContact);
        res.status(204).send("updated")
    }catch(e){
        res.status(400).status("There is no contact with that id")
    }
})


module.exports=router