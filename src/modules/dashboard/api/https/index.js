import { cacheKeys, httpCacheable } from "api/cacheControl/htt-cacheable";
import { URL_APIS } from "store/URLapis";

export const getAllTagsAction = async() => {
    try {
        const { articles } = await httpCacheable.getList( URL_APIS.getTags, cacheKeys.TAGS );
        return articles;
    } catch (error) {
        console.log(error);
    }
}