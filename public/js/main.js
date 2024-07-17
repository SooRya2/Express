const output=document.getElementById('output');
const button=document.getElementById("get-posts-btn");
const button2=document.getElementById("add-post-form");

//get and show posts
const showposts=async ()=>{
try{
    const result=await fetch('http://localhost:8000/api/posts');
    if(!result.ok){
        throw new Error('Failed to fetch posts');
    }

    const posts=await result.json();
    output.innerHTML='';
    posts.forEach((post)=>{
        const postEl=document.createElement('div');
        postEl.textContent=post.name;
        output.appendChild(postEl);
    });
}catch(error){
    console.log('Error fetching posts',error)
}
}

//add name
const addpost=async(e)=>{
    e.preventDefault();
    const formData=new FormData(button2);
    const name=formData.get('name');
    try{
    const result=await fetch('http://localhost:8000/api/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name})
    })
    if(!result.ok){
        throw new Error('Failed to add post');
    }
    const newPost=await result.json();
    const postEl=document.createElement('div');
    output.appendChild(postEl);
    postEl.textContent=newPost.name
    showposts();
    }
    catch(error)
    {
        console.log("Error adding new post",error);
    }
}
button.addEventListener('click',showposts);
button2.addEventListener('submit',addpost);