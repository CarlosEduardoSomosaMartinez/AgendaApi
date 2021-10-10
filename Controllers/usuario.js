const {User}=require('../models/db/index')
const ModelController=require('./index')

class UserModel extends ModelController{
    constructor(model){
        super(model)
    }
        createUser=async (req,res)=>{
            const user =req.body;
            if(typeof user ==='object'){
                try{
                    let newUser=await this.model.create(user);
                    res.json(newUser)
                }catch(error){
                    res.json(error)
                }
            }else{
                res.status(400).send('wrong parameter')
            }
        }
        UpdateUser=async(req,res)=>{
            const {id}=req.params;
            const {user}=req.body;
            if(id && user){
                try{    
                    let update=await  this.model.update({...user},{where:{id}})
                }catch(error){
                    res.json(error)
                }
            }else{
                res.json("error faltante")
            }


        }

}
const UserController = new UserModel(User);
module.exports=UserController;