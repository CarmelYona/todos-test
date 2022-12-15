
export const blogService = {
     getPosts,
     getComments
}

window.us = blogService

async function getPosts() {
    try{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }catch(err){console.log(err)}
    
}
async function  getComments(postId){
    try{
        const response =await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        return await response.json()
    }catch(err){console.log(err)}
}

