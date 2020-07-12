const colors = require('colors')
require('dotenv').config()
const morgan = require('morgan')
const server = require('./server/server.js')
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT

if(ENV === 'development'){
    server.use(morgan('combined'))
}

server.listen(PORT, ()=>{
    console.log(`\n === Server listening in ${ENV} mode on localhost:${PORT} === \n`.magenta.bold.underline)
})