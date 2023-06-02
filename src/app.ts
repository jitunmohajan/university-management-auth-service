import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modulers/users/users.route'
const app: Application = express()
// const port = 3000

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// testing server
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
