import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const createRent = async (data,token) => {
    const endpoint = backendUrl + '/rent/create';
    return await executeFetch(endpoint, data, HttpMethods.POST, token, 201);
};


export const myRents = async (token) => {
    const endpoint = backendUrl + '/rent/my-requests';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};

export const rentsByUser = async (id,token) => {
    const endpoint = backendUrl + '/rent/client/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const requestedRents = async (token) => {
    const endpoint = backendUrl + '/rent/pending-requests';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const aceptRent = async (id,token) => {
    const endpoint = backendUrl + '/rent/accept/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.PATCH, token, 200);
};
export const rejectRent = async (id,token) => {
    const endpoint = backendUrl + '/rent/reject/'+ id;
    return await executeFetch(endpoint, null, HttpMethods.PATCH, token, 200);
};
