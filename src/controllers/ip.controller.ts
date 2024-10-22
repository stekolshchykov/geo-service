import { Request, Response } from 'express';
import ipInspector from "../libs/IPInspector";
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


export const isIpInRange = (req: Request, res: Response): void => {
    const { ip, range } = req.body;
    const response: ApiResponse<boolean> = {
        status: 'success',
        data: ipInspector.isIpInRange(ip, range)
    };
    res.status(200).json(response);
};


export const isValidIpRange = (req: Request, res: Response): void => {
    const { range } = req.body;
    const response: ApiResponse<boolean> = {
        status: 'success',
        data: ipInspector.isValidIpRange(range)
    };
    res.status(200).json(response);
};

export const checkIpAgainstList = (req: Request, res: Response): void => {
    const { ip, ipList } = req.body;
    const response: ApiResponse<boolean> = {
        status: 'success',
        data: ipInspector.checkIpAgainstList(ip, ipList)
    };
    res.status(200).json(response);
};
