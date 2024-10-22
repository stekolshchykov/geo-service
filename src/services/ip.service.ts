import SxGeo from 'sxgeo-node';
import path from 'path';

const sxgeo = new SxGeo(path.resolve(__dirname, '../data/SxGeoCity.dat'));

export const getLocationByIp = (ip: string) => {
    return sxgeo.getCityFull(ip); // Вернет данные местоположения или false
};
