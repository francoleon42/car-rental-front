import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const createRent = async (data,token) => {
    const endpoint = backendUrl + '/rent/crear';
    return await executeFetch(endpoint, data, HttpMethods.POST, token, 201);
};


export const myRents = async (token) => {
    const endpoint = backendUrl + '/rent/mis_solicitudes';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};

export const rentsByUser = async (id,token) => {
    const endpoint = backendUrl + '/rent/cliente/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};