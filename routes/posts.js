import express from 'express';
import { getpost,getposts,createPost,updatepost,deletepost } from '../controllers/postcontroller.js';
const router=express.Router();


const logger=(req,res,next)=>{
    console.log(`${req.method}`);
    next();
}

router.get('/',getposts);

router.get('/:id',getpost)
// router.get('/api/posts',(req,res)=>{
//     const id=req.query.id;
//     res.json(posts.filter((post)=>post.id==id));
// })

router.post('/',createPost)

router.put('/:id',updatepost)

router.delete('/:id',deletepost)

export default router;