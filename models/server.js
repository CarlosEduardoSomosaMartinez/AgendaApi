const express=require('express');
const cookieParser=require('cookie-parser')
const morgan=require('morgan');
const cors=require('cors')
class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.middlewares();
        this.routes();
    }
    routes(){
        this.app.use('/Agenda',require('../routes/index.js'));
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(cookieParser());
        this.app.use(morgan('dev'));
        this.app.use(cors());

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Corriendo");
        })
    }
}
module.exports=Server;