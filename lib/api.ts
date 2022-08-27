import { getCookie, setCookie } from "./cookie";

export async function postApi<JSON = any>(url: string, object: any,): Promise<JSON> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${getCookie('auth')}`,
        },
        body: JSON.stringify(object)
    });
    return await response.json();
}



export async function authApi<JSON = any>(url: string, method:string, object: any,): Promise<JSON> {
    const response = await fetch(url, {
        method: method,
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(object)
    });
    const data = await response.json();
    setCookie('auth', data.accessToken, 360);
    return data;
}



