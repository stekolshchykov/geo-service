import csv from 'csv-parser';
import fs from 'fs';
import * as ipaddr from 'ipaddr.js';
import * as zlib from "node:zlib";
import {IpInfoResultI} from "../types/response"

class IpInfoManager {

    private ipRanges: IpInfoResultI[] = [];

    public findIP = (ip: string): IpInfoResultI | false => {
        for (const range of this.ipRanges) {
            if (this.isIPInRange(ip, {start: range.start_ip, end: range.end_ip})) {
                return range;
            }
        }
        return false;
    }

    public loadCSV = (filePath: string): Promise<void> => {
        return new Promise((resolve, reject) => {

            const gzFilePath = `${filePath}.gz`;
            const gunzip = zlib.createGunzip();

            fs.createReadStream(gzFilePath)
                .pipe(gunzip)
                .pipe(csv())
                .on('data', (row) => {
                    this.ipRanges.push({
                        start_ip: row.start_ip,
                        end_ip: row.end_ip,
                        country: row.country,
                        country_name: row.country_name,
                        continent: row.continent,
                        continent_name: row.continent_name,
                        asn: row.asn || undefined,
                        as_name: row.as_name || undefined,
                        as_domain: row.as_domain || undefined,
                    });
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', () => {
                    reject()
                });
        });
    }

    private isIPInRange = (ip: string, range: {
        start: string;
        end: string;
    }): boolean => {
        try {
            const address = ipaddr.parse(ip);

            const start = ipaddr.parse(range.start);
            const end = ipaddr.parse(range.end);

            if (start.kind() !== address.kind()) {
                return false; // если IP-адрес и диапазон разного типа (IPv4 и IPv6)
            }

            const startBytes = start.toByteArray();
            const endBytes = end.toByteArray();
            const addressBytes = address.toByteArray();

            // Проверка, что адрес находится в пределах диапазона
            for (let i = 0; i < startBytes.length; i++) {
                if (addressBytes[i] < startBytes[i] || addressBytes[i] > endBytes[i]) {
                    return false;
                }
            }

            return true;
        } catch (error) {
            return false
        }
    }
}

const ipInfoDbManager = new IpInfoManager();

export default ipInfoDbManager
