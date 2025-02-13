import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const getCars = async (token) => {
    const endpoint = backendUrl + '/cars';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const getCarDetails = async (id,token) => {
    const endpoint = backendUrl + '/cars/detalle/' + id;
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};

export const createCar = async (data,token) => {
    const endpoint = backendUrl + '/cars/crear';
    return await executeFetch(endpoint, data, HttpMethods.POST, token, 201);
};

export const updateCar = async (id,data,token) => {
    const endpoint = backendUrl + '/cars/actualizar/'+ id;
    return await executeFetch(endpoint, data, HttpMethods.PATCH, token, 200);
};