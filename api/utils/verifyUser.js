const jwt=require('jsonwebtoken');
const errorHandler=require('../utils/error')

exports.verifyToken=async(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token)
    {
     return next(errorHandler(401,'Unauthorized'));
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err)
        {
        return next(errorHandler(401,'UnAuthorized'));
        }
        req.user=user;
        next();//go to updateUser
    })
}