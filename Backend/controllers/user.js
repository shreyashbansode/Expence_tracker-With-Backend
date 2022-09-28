const models = require('../models/user');

exports.createItem= async(req,res)=>{
try{
    const saveData=  await new models(req.body).save();

    res.json(saveData);
}catch(err){
    res.json(err);
}



}

exports.getItem= async(req,res)=>{
    try{
        const itemData=  await  models.find();
    
        res.json(itemData);
    }catch(err){
        res.json(err);
    }
    
    
    
    }


    exports.getoneItem= async(req,res)=>{
        try{
            const itemData=  await  models.find({_id:req.params.userID});
        
            res.json(itemData);
        }catch(err){
            res.json(err);
        }
        
        
        
        }
    





exports.deleteUser= async (req,res)=>{
    try{
        const deleteuser = await models.findOneAndDelete({_id:req.params.userID});
        res.json(deleteuser);
    }
    catch(err) {
        res.json(err);
    }
}
   


exports.updateUser = (req,res)=>{


    models.findOneAndUpdate({_id:req.params.userID},req.body,{new:true},(err,data)=>{

        if(err){
            res.json(err)
        }else{
            res.json(data);
        }
    })
}