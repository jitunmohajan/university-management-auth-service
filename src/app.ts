import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

// import ApiError from './errors/ApiError'
const app: Application = express();
// const port = 3000

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesteres', AcademicSemesterRoutes);

app.use('/api/v1', routes);

// testing server
// app.get('/', async(req: Request, res: Response, next:NextFunction) => {
//    throw new Error('Testing Error logger');
// })

// globall error
app.use(globalErrorHandler);

export default app;
