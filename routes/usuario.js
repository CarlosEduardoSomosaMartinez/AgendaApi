const {Router}=require('express');
const router=Router();
//futuro modelo
const {getAllData,
        createUser,
        UpdateUser }=require('../Controllers/usuario.js');

//posibles rutas
router.get('/getUser/:id',getAllData)//obtener usuario
router.post('/Register',createUser)//Registro de usuario
router.put('/EditUser',UpdateUser)//editar usuario
module.exports=router;