import firebaseService from "./firebase.service"

export const userService = {
    getUsers,
    updateUser
}

window.us = userService
async function getUsers() {
    let gUsers = []
    try{
        gUsers = await firebaseService.get()
        if(!gUsers.length){
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            gUsers = await response.json()
            await _save(gUsers)
        }
        return gUsers
    }catch(err){console.log(err)}
}

async function updateUser(user){
    await firebaseService.save(user)
}

async function _save(users){
    users.forEach(async user=>{
      await firebaseService.save(user)
    })
}