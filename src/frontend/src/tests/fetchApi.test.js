import { getData } from '../services/fetchApi';
import { getDataMock } from './mocks/fetchApi.mock';
  
  describe('Test FetchApi', () => {
  
    describe('Test FetchApi getDate', () => {  
      it('Test FetchApi - OK', async () => {
        jest.spyOn(global, 'fetch');
        global.fetch.mockResolvedValue({
          json: jest.fn().mockResolvedValue(getDataMock),
        });
    
        const result = await getData('test');

        expect(result).toStrictEqual(getDataMock);
      });
    });
  });