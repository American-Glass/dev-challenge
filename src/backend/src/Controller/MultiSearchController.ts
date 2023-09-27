import { Request, Response } from 'express';
import { IMultiSearchController } from '../Interface';
import MultiSearchService from '../Service';

export default class MultiSearchController implements IMultiSearchController {
    constructor(private multiSearchService: MultiSearchService) {}
  
    public async findOne(_req: Request, res: Response): Promise<Response> {
      const result = await this.multiSearchService.findOne();

      console.log(result)
      
      return res.status(200);
    }
}