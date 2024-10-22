import { Request, Response } from 'express';
import { getLocationByIp } from '../services/ip.service';
import { ApiResponse } from '../types/response';

export const getIpLocation = (req: Request, res: Response): void => {
    const { ip } = req.params;

    const location = getLocationByIp(ip);

    if (!location) {
        const response: ApiResponse<null> = {
            status: 'error',
            data: null,
            message: `Invalid IP address or location not found: ${ip}`
        };
        res.status(400).json(response);
    } else {
        const response: ApiResponse<typeof location> = {
            status: 'success',
            data: location
        };
        res.status(200).json(response);
    }
};
