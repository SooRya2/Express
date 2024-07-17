import colors from 'colors';

const logger=(req,res,next)=>{
    console.log(`${req.method}`);
    next();
}

export default logger;