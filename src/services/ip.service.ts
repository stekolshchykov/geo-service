import axios from "axios";
import path from 'path';
import SxGeo from 'sxgeo-node';
import ipInfoDbManager from "../libs/IpInfoManager";
import {IpInfoResponseI, IpInfoResultI} from "../types/response";

//

const sxGeoDataFilePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './data/SxGeoCity.dat')
    : path.resolve(__dirname, '../data/SxGeoCity.dat');

const sxgeo = new SxGeo(sxGeoDataFilePath);
export const getLocationByIpSypexgeo = (ip: string) => {
    return sxgeo.getCityFull(ip);
};

//

export const getLocationByIpIpinfo = async (ip: string): Promise<IpInfoResponseI | false> => {
    return await axios.get(`https://ipinfo.io/${ip}/json`)
        .then(response => response.data)
        .catch(error => {
            console.log("* * getLocationByIpIpinfo catch", ip, error?.response?.data)
            return false
        })
};

//

const ipInfoDataFilePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './data/country_asn.csv')
    : path.resolve(__dirname, '../data/country_asn.csv');

ipInfoDbManager.loadCSV(ipInfoDataFilePath)
export const getLocationByLocIpIpinfo = (ip: string): IpInfoResultI | false => {
    return ipInfoDbManager.findIP(ip)
};
