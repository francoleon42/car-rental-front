import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const getUser = async (token) => {
    const endpoint = backendUrl + '/user/informacion';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};