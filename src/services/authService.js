import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const login = async (data) => {
    const endpoint = backendUrl + '/auth/login';
    return await executeFetch(endpoint, data, HttpMethods.POST, null, 201);
};

export const signup = async (data) => {
    const endpoint = backendUrl + '/auth/signup';
    return await executeFetch(endpoint, data, HttpMethods.POST, null, 201);
};



