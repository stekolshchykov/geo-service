import * as dotenv from 'dotenv';
import express from 'express';
import errorHandler from './middlewares/errorHandler.middleware';
import ipRoutes from './routes/ip.route'; // Подключение маршрутов для IP

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', ipRoutes);
app.use(errorHandler);

export default app;
