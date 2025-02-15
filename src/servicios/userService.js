import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const getUser = async (token) => {
    const endpoint = backendUrl + '/user/information';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};

export const getClients = async (token) => {
    const endpoint = backendUrl + '/user/client';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};

export const updateUser = async (data,token) => {
    const endpoint = backendUrl + '/user/update';
    return await executeFetch(endpoint, data, HttpMethods.PATCH, token, 200);
};

