//Get all posts(/api/posts)

let posts=[
    {id:1,name:'john'},
    {id:2,name:'wick'},
    {id:3,name:'soori'}
];


export const getposts=(req,res)=>{//url is api/posts?limit=2;

    //For sending whole html file to the client
    //res.sendFile(path.join(__dirname,'public','index.html'));
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0)
    {
        res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
    
}


//Get single posts(/api/posts/:id)
export const getpost=(req,res)=>{
    //res.sendFile(path.join(__dirname,'public','about.html'));
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);
    if(!post)
    {
        const error=new Error({msg:`The post with id ${id} is not found`});
        return next(error);
    }
    else{
        res.json(post);
    }
}

//create new post(/api/posts)
export const createPost=(req,res)=>{
    const newPost={
        id:posts.length+1,
        name:req.body.name
    };

    if(!req.body.name)
    {
        return res.status(400).json({msg:'PLs add a name'});
    }
    posts.push(newPost);
    res.status(201).json(posts);
} 

//update post(/api/posts/:id)
export const updatepost=(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);
    if(!post){
        res.status(404).json({msg:`post with id ${id} not found`});
    }
    post.name=req.body.name;
    res.status(200).json(posts);
};

//delete post(/api/posts/:id)
export const deletepost=(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id===id);
    if(!post){
        res.status(404).json({msg:`post with id ${id} not found`});
    }
    posts=posts.filter((post)=>post.id!==id); //returns all posts expect the one with id
    res.status(200).json(posts);
} 