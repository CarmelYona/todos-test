

export const TodosService = {
    getTodos,
}

window.us = TodosService

async function getTodos(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
        return await response.json()
    } catch(err){console.log(err)}
}

