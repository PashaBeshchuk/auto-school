const app = require('./middleware');
const mongoose = require('mongoose')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://auto-school-name:autoscholl@cluster-auto-school-i5enn.mongodb.net/auto-school', {
            useNewUrlParser: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
            useUnifiedTopology: true
        })
        app.listen(8080, ()=> {
            console.log("Server has been started")
        })
    } catch(e) {
        console.log(e)
    }
}
start()

// app.listen(8080, ()=> {
//     console.log("Server has been started")
// })

//auto-school-name
//autoscholl
