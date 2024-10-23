import {Router} from 'express';
import {
    checkIpAgainstList,
    getIpLocationIpinfo,
    getIpLocationSypexgeo,
    isIpInRange,
    isValidIpRange
} from '../controllers/ip.controller';
import {validateRequest} from "../middlewares/validate.middleware";
import {checkIpAgainstListSchema, ipSchema, isIpInRangeSchema, isValidIpRangeSchema} from "../validation/ip.validation";

const router = Router();

router.get('/sypexgeo/:ip', validateRequest(ipSchema, 'params'), getIpLocationSypexgeo);
router.get('/ipinfo/:ip', validateRequest(ipSchema, 'params'), getIpLocationIpinfo);
router.post('/is-ip-in-range/', validateRequest(isIpInRangeSchema), isIpInRange);
router.post('/is-valid-range/', validateRequest(isValidIpRangeSchema), isValidIpRange);
router.post('/check-ip-against-list/', validateRequest(checkIpAgainstListSchema), checkIpAgainstList);

export default router;
