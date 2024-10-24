export interface ApiResponse<T> {
    status: 'success' | 'error';
    data: T | null;
    message?: string;
}


export interface IpInfoResponseI {
    ip: string
    city: string
    region: string
    country: string
    loc: string
    org: string
    postal: string
    timezone: string
}

export interface IpInfoResultI {
    start_ip: string;
    end_ip: string;
    country: string;
    country_name: string;
    continent: string;
    continent_name: string;
    asn?: string;
    as_name?: string;
    as_domain?: string;
}
