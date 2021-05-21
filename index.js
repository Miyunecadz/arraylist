const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

require('./routes.js')(app)

app.listen( process.env.PORT || 3000, ()=>{
    console.log(`Server start http://localhost:${ process.env.PORT || 3000}`)
})