import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'


export const getPictureByCar = async (id,token) => {
    const endpoint = backendUrl + '/picture/car/'+id;
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};


export const deletePicture = async (id,token) => {
    const endpoint = backendUrl + '/picture/'+id;
    return await executeFetch(endpoint, null, HttpMethods.DELETE, token, 200);
};

export const uploadPicture = async (id,data,token) => {
    const endpoint = backendUrl + '/picture/upload-for-car/'+id;
    return await executeFetch(endpoint, data, HttpMethods.POST, token, 201);
};

