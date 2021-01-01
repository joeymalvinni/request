const fs = require('fs')
const request = require('../index.js')

request.get('https://i.pinimg.com/originals/4f/82/8d/4f828d05f82b8b7aedfe8be6a7d9d2a3.png').buffer().then(buffer=>{
    try {
        fs.writeFileSync("examples/meme.jpg", buffer);
        console.log('Successfully saved meme!')
    } catch (error){
        throw new Error(error)
    }
})