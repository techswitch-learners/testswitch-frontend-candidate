import getConfig from 'next/config';
import fetch from "node-fetch";

export async function checkToken(token: string): Promise<boolean> {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.API_URL;
    
    const response = await fetch(`${baseUrl}/sessions/${token}`);
    return response.ok;
}