import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modulers/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import ApiError from './errors/ApiError'
const app: Application = express()
// const port = 3000

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// testing server
// app.get('/', async(req: Request, res: Response, next:NextFunction) => {
//    throw new Error('Testing Error logger');
// })

// globall error
app.use(globalErrorHandler)

export default app
