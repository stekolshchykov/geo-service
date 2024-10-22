import { Router } from 'express';
import { getAllUsers, addUser } from '../controllers/user.controller';
import { validateRequest } from '../middlewares/validate.middleware';
import { userSchema } from '../validation/user.validation';

const router = Router();

router.get('/', getAllUsers);
router.post('/', validateRequest(userSchema), addUser);  // Валидация перед добавлением пользователя

export default router;
