import getConfig from 'next/config';
import fetch from "node-fetch";

export async function checkToken(token: string): Promise<boolean> {
    const {publicRuntimeConfig} = getConfig();
    const baseUrl = publicRuntimeConfig.API_URL;

    const response = await fetch(`https://testswitch-api-staging.herokuapp.com/sessions/${token}`);
    return response.ok;
}
