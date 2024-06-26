import express from 'express'
import morgan from 'morgan'
import taskroutes from './routes/tasks.routes'

const app = express()

app.use(morgan('dev'))
app.use(taskroutes)

app.listen(3000)
console.log('Server on port 3000')