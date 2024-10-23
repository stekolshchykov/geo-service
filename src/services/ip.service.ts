import axios from "axios";
import path from 'path';
import SxGeo from 'sxgeo-node';
import {IpInfoResponseI} from "../types/response";

const dataFilePath = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './data/SxGeoCity.dat')  // Путь для production (после сборки)
    : path.resolve(__dirname, '../data/SxGeoCity.dat');  // Путь для разработки

const sxgeo = new SxGeo(dataFilePath);

export const getLocationByIpSypexgeo = (ip: string) => {
    return sxgeo.getCityFull(ip); // Вернет данные местоположения или false
};

export const getLocationByIpIpinfo = async (ip: string): Promise<IpInfoResponseI | false> => {
    return await axios.get(`https://ipinfo.io/${ip}/json`)
        .then(response => response.data)
        .catch(error => {
            console.log("* * getLocationByIpIpinfo catch", error)
            return false
        })
};
