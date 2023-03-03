import jwt from 'jsonwebtoken'
//custom middleware
export const auth = (request,response,next) => { 
const token = request.header("x-auth-token");
 
try{
    jwt.verify(token,process.env.SECRET_KEY)
next()
}
catch(err){
    response.status(401).send({message:err.message});
}
}