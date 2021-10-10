class ModelController{
    constructor(model){
        this.model=model;
    }
    getAllData=async(req,res)=>{
        try{
            let data= await this.model.findAll();
            res.json(data)
        }catch(error){
            res.json(error)
        }
        
    }
    findDataId=async(req,res)=>{
        const {id}=req.params;
        try{
            let data = await this.model.findByPk(id)
            res.json(data)
        }catch(error){
            res.json(error)
        }

    }
    deleteDataById=async(req,res)=>{
        const {id}=req.params;
        try{
            await this.model.destroy(id)
            res.json({
                msg:"borrado para siempre"
            })
        }catch(error){
            res.json(error)
        }
    }
    
}
module.exports=ModelController;