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


export const requestedRents = async (token) => {
    const endpoint = backendUrl + '/rent/solicitadas';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const aceptRent = async (id,token) => {
    const endpoint = backendUrl + '/rent/aceptar/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.PATCH, token, 200);
};
export const rejectRent = async (id,token) => {
    const endpoint = backendUrl + '/rent/rechazar/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.PATCH, token, 200);
};