import { Request, Response } from 'express';
import { IEquipments, IMaterials, IPurchaseOrder, ISalesOrders, IWorkforce } from '.';

interface IResponse {
    equipments: IEquipments[],
    materials: IMaterials[],
    purchaseOrders: IPurchaseOrder[],
    salesOrders: ISalesOrders[],
    workforce: IWorkforce[]
}

interface IMultiSearchController {
    findAllByName: (req: Request, res: Response) => Promise<Response>,
}

interface IMultiSearchService {
    findAllByName: (text: string) => Promise<IResponse>,
}

interface IMultiSearchModel<T> {
    findAllByName(text: string): Promise<T[]>,
}

export { IMultiSearchController, IMultiSearchService, IMultiSearchModel, IResponse }