const app = require('./app')
const config = require('./config/config')
const connectDb = require('./db/connection')

const PORT = config.port


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`App is Up and Running in PORT  : ${PORT}`, );   
    })
}).catch(()=>{
    console.error("Server Down");
})
