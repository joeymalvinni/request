const request = require('../index.js')

request.patch('https://jsonplaceholder.typicode.com/todos/1', {
    data: JSON.stringify({
        completed: true
    })
}).json().then((res)=>{
    let completed = res.completed ? 'completed' : 'uncompleted'
    console.log(`Todolist item '${res.title}' is ${completed}`)
})

//=> Todolist item 'delectus aut autem' is completed