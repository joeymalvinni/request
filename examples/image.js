const fs = require('fs')
const request = require('../index.js')

request.get('https://res.cloudinary.com/practicaldev/image/fetch/s--ij_hqKUb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/mind_js.jpg%3Fraw%3Dtrue').buffer().then(buffer=>{
    try {
        fs.writeFileSync("examples/meme.jpg", buffer);
        console.log('Successfully saved meme!')
    } catch (error){
        throw new Error(error)
    }
})