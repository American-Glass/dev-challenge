import { Request, Response } from 'express';
import { IEquipments } from '.';

interface IMultiSearchController {
    findOne: (req: Request, res: Response) => Promise<Response>,
}

interface IMultiSearchService {
    findOne: () => Promise<IEquipments | null>,
}

export { IMultiSearchController, IMultiSearchService }