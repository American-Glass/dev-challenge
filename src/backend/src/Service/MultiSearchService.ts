import { IEquipments, IEquipmentsModel } from '../Interface';
import { IMultiSearchService } from '../Interface';

export default class MultiSearchService implements IMultiSearchService {
    constructor(private equipmentsModel: IEquipmentsModel) {}
  
    public async findOne(): Promise<IEquipments | null> {
      const list = await this.equipmentsModel.findOne();
  
      return list;
    }
}