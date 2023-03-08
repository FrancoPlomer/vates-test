import { cacheKeys, httpCacheable } from "api/cacheControl/htt-cacheable";
import { URL_APIS } from "store/URLapis";

describe('test over the endpoint of articles', () => {
    test('should return an array whit articles', async() => {
        const { articles } = await httpCacheable.getList( URL_APIS.getTags, cacheKeys.TAGS );
        expect(Array.isArray(articles)).toBeTruthy();
    })
    
})
