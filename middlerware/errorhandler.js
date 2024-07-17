
const errorhandler=(err,req,res,next)=>{
    res.status(404).json({msg:err.msg});

}

export default errorhandler;