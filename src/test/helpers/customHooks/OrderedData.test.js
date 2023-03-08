
import { countsRepeat } from "helpers/Aux_Helpers_Data"
import { articles } from "test/mocks"

const inAscOrder = (arr) => {

    const arr_length = arr.length;
    if(arr_length <= 1) return true;
    for (let index = 0; index < arr_length; index++) {
        if( arr[index] < arr[index + 1] )
            return false
    }
    return true
}


describe('test over the function countsRepeat', () => {
    
    test('should return an array whit ordered data', async() => {
        const tags = articles.reduce((acc, res) => {
            return [
                ...acc,
                ...res.taxonomy.tags.reduce((acc, tag) => [ ...acc, {
                    ...tag,
                    src: `tema/${tag['slug']}`,
                    count: 1
                }], [])
            ]
        },[])
        const { res } = countsRepeat( tags );

        expect(inAscOrder(res.map( data => data.count ))).toBeTruthy();
    })
    
})
