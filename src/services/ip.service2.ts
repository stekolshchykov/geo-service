import SxGeo from 'sxgeo-node';
import path from 'path';
import { dirname } from 'path';

const dataFilePath = process.env.NODE_ENV === 'production'
    ? path.resolve(dirname.toString(), './data/SxGeoCity.dat')  // Путь для production (после сборки)
    : path.resolve(dirname.toString(), '../data/SxGeoCity.dat');  // Путь для разработки

const sxgeo = new SxGeo(dataFilePath);

export const getLocationByIp = (ip: string) => {
    return sxgeo.getCityFull(ip); // Вернет данные местоположения или false
};
