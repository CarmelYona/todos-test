import firebaseService from "./firebase.service"



export const userService = {
    getUsers,
}

window.us = userService

async function getUsers() {
    try{
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const users= await response.json()
        // await _save(users)
        return users
    }catch(err){console.log(err)}
}

async function _save(users){
    users.forEach(async user=>{
      await  firebaseService.add(user)
    })
}

