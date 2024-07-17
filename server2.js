
import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middlerware/logger.js';
import errorhandler from './middlerware/errorhandler.js';
import {fileURLToPath} from 'url';
const app=express();

//Get the directory name
const  __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//Request Body middleware
app.use(express.json()); //gets raw json input

//Routes (using middleware)
app.use('/api/posts',posts);

//setup static folder
app.use(express.static(path.join(__dirname,'public')));

//Logger middleware
app.use(logger);

app.use(errorhandler);

app.listen(8000,()=>{
    console.log("Server is running on 8000");
})