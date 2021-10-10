require('dotenv').config();
const Server=require('./models/server');
const {db}=require('./models/db/index')

db.sync({force:true})
.then(()=>{
    const server=new Server();
    server.listen();
})

