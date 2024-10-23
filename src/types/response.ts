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
