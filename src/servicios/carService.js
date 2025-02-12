import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const getCars = async (token) => {
    const endpoint = backendUrl + '/cars';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const getCarDetails = async (id,token) => {
    const endpoint = backendUrl + '/cars/detalle/' + id;;
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};