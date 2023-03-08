import { storageHandler } from "./storage-handler";
import httpConfig from "api/config";

export const httpCacheable = {
    getList: async ( endpoint, storageKey, baseApi = httpConfig ) => {
        const storedList = storageHandler.get(storageKey);
        let list = [];
        if (storedList) {
        list = Promise.resolve(storedList);
        } else {
            list = await baseApi(endpoint, {
                method: 'GET',
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response =>  response.json() )
            .then( nextResponse => {
                if ( nextResponse ) {
                    storageHandler.set(storageKey, nextResponse);
                    return nextResponse;
                } else {
                    return [];
                }
            })
            .catch(() => []);
        }
        return list;
    },
}


export const cacheKeys = {
    TAGS: { id:'tags', expirationTime:  5 * 24 * 60 * 60 * 1000, nombre: 'listTags', descripcion: 'info tags' },
}

