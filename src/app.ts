import express from 'express';
import userRoutes from './routes/user.route';
import ipRoutes from './routes/ip.route'; // Подключение маршрутов для IP
import errorHandler from './middlewares/errorHandler.middleware';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/ip', ipRoutes); // Использование маршрутов для IP
app.use(errorHandler);

export default app;
