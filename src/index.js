import express from 'express'
import morgan from 'morgan'
import taskroutes from './routes/tasks.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(taskroutes)
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(3000)
console.log('Server on port 3000')