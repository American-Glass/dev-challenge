import {
  IMultiSearchService,
  IMultiSearchModel,
  IResponse,
  IEquipments,
  IMaterials,
  IPurchaseOrder,
  ISalesOrders,
  IWorkforce }
from '../Interface';

export default class MultiSearchService implements IMultiSearchService {
    constructor(
      private equipmentsModel: IMultiSearchModel<IEquipments>,
      private materialsModel: IMultiSearchModel<IMaterials>,
      private purchaseOrdersModel: IMultiSearchModel<IPurchaseOrder>,
      private salesOrdersModel: IMultiSearchModel<ISalesOrders>,
      private workforceModel: IMultiSearchModel<IWorkforce>,
    ) {}
  
    public async findAllByName(text: string): Promise<IResponse> {
      const equipments = await this.equipmentsModel.findAllByName(text);
      const materials = await this.materialsModel.findAllByName(text);
      const purchaseOrders = await this.purchaseOrdersModel.findAllByName(text);
      const salesOrders = await this.salesOrdersModel.findAllByName(text); 
      const workforce = await this.workforceModel.findAllByName(text);
  
      return {
        equipments,
        materials,
        purchaseOrders,
        salesOrders,
        workforce
      };
    }
}