import { Request, Response } from 'express';
import { IMultiSearchController } from '../Interface';
import MultiSearchService from '../Service';

export default class MultiSearchController implements IMultiSearchController {
    constructor(private multiSearchService: MultiSearchService) {}
  
    public async findAllByName(req: Request, res: Response): Promise<Response> {
        const { body: { text } } = req;
    
        const result = await this.multiSearchService.findAllByName(text.trim());
        
        return res.status(200).json(result);
    }
}