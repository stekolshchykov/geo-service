import { Router } from 'express';
import { validateRequest } from "../middlewares/validate.middleware";
import {checkIpAgainstListSchema, ipSchema, isIpInRangeSchema, isValidIpRangeSchema} from "../validation/ip.validation";
import {checkIpAgainstList, getIpLocation, isIpInRange, isValidIpRange} from '../controllers/ip.controller';

const router = Router();

router.get('/sypexgeo/:ip', validateRequest(ipSchema, 'params'), getIpLocation);
router.get('/is-ip-in-range/', validateRequest(isIpInRangeSchema), isIpInRange);
router.get('/is-valid-range/', validateRequest(isValidIpRangeSchema), isValidIpRange);
router.get('/check-ip-against-list/', validateRequest(checkIpAgainstListSchema), checkIpAgainstList);

export default router;
