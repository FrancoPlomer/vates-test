import { formatDatte } from "helpers/Aux_Helpers"


describe('test over the helper formatDatte', () => {
    
    test('should return an date whit format day of the month, year', async() => {
        expect(formatDatte('2019-12-06T17:50:17.735Z')).toBe('6 de Diciembre, 2019');
    })
    
})
