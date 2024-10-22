import { Router } from 'express';
import { validateRequest } from "../middlewares/validate.middleware";
import { ipSchema } from "../validation/ip.validation";
import { getIpLocation } from '../controllers/ip.controller';

const router = Router();

router.get('/info/:ip', validateRequest(ipSchema, 'params'), getIpLocation); // Используем 'params' для валидации параметров

export default router;
