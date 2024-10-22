import ipaddr from "ipaddr.js";

class IPInspector {

    isIpInRange = (ip: string, range: string): boolean => {
        // Проверяем, является ли переданный IP адрес IPv4 или IPv6
        try {
            const parsedIp = ipaddr.parse(ip);

            if (parsedIp.kind() === 'ipv4' || parsedIp.kind() === 'ipv6') {
                // Проверяем, если это формат CIDR
                if (range.includes('/')) {
                    const parsedRange = ipaddr.parseCIDR(range);
                    return parsedIp.match(parsedRange);
                }

                // Проверяем, если это диапазон в формате startIP-endIP
                if (range.includes('-')) {
                    const [startIpStr, endIpStr] = range.split('-').map(ipStr => ipaddr.parse(ipStr.trim()));

                    // Преобразуем IP в числовой формат для сравнения
                    const startIpNum = this.ipToNumber(startIpStr);
                    const endIpNum = this.ipToNumber(endIpStr);
                    const targetIpNum = this.ipToNumber(parsedIp);

                    return targetIpNum >= startIpNum && targetIpNum <= endIpNum;
                }
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    isValidIpRange = (range: string): boolean => {
        try {
            if (range.includes('/')) {
                // Попытка парсинга как CIDR
                const parsedCIDR = ipaddr.parseCIDR(range);
                // Дополнительная проверка: если парсинг прошёл успешно, диапазон валиден
                return true;
            } else if (range.includes('-')) {
                // Парсинг как startIP-endIP
                const parts = range.split('-');
                if (parts.length !== 2) {
                    return false; // Неверный формат
                }

                const startIpStr = parts[0].trim();
                const endIpStr = parts[1].trim();

                const startIp = ipaddr.parse(startIpStr);
                const endIp = ipaddr.parse(endIpStr);

                // Проверяем, что оба IP принадлежат одному семейству (оба IPv4 или оба IPv6)
                if (startIp.kind() !== endIp.kind()) {
                    return false;
                }

                // Преобразуем IP в числовое представление для сравнения
                const startIpNum = this.ipToNumber(startIp);
                const endIpNum = this.ipToNumber(endIp);

                // Проверяем, что startIP <= endIP
                if (startIpNum > endIpNum) {
                    return false;
                }

                return true;
            } else {
                // Неизвестный формат
                return false;
            }
        } catch (error) {
            // В случае ошибки парсинга возвращаем false
            return false;
        }
    }

    checkIpAgainstList = (ip: string, ipList: string): boolean => {
        let result = false;
        ipList.split("\n").forEach(ipLine => {
            const trimmedIpLine = ipLine.trim();
            if (trimmedIpLine && this.isIpInRange(ip, trimmedIpLine)) {
                result = true;
            }
        });
        return result;
    }

    private ipToNumber = (ip: ipaddr.IPv4 | ipaddr.IPv6): bigint => {
        const bytes = ip.toByteArray();
        return bytes.reduce((acc, byte) => (acc << BigInt(8)) + BigInt(byte), BigInt(0));
    }
}

const ipInspector = new IPInspector();

export default ipInspector;
