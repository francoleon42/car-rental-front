import { backendUrl } from '../connection/backUrl';
import {executeFetch} from '../connection/fetch'
import {HttpMethods} from '../connection/HttpMethods'

export const uploadDocument = async (file, title, description, token) => {
    const endpoint = backendUrl + '/document/upload';
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    return await executeFetch(endpoint, formData, HttpMethods.POST, token, 201);
};

export const getDocuments = async (token) => {
    const endpoint = backendUrl + '/document';
    return await executeFetch(endpoint, null, HttpMethods.GET, token, 200);
};