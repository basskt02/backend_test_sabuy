import express from 'express'
import Terminal from './src/routes/terminal_info.route'
import Test from './src/routes/test.route'

const app = express()
import cors from 'cors'

const port = 3000
//
app.use(cors())


app.set('port' , port)
app.use(express.json())

app.get('/', (req,res) => {
    res.send('root path')
})

app.use('/api', Terminal)
app.use("/api",Test)


app.listen (app.get('port'),() => {
    console.log("Start server on port : " + app.get("port"))
})

