const {Router}=require('express');
const router=Router();
//importasion de rutas
const UserRouter=require('./usuario');
//Agregado de rutas
router.use('/usuario',UserRouter);
module.exports=router;