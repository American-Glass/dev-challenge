import { readFile } from 'fs/promises';
import { IEquipments, IEquipmentsModel } from '../Interface';
import data from '../DB/equipments.json';

export default class EquipmentsModel implements IEquipmentsModel {
    constructor() {}

    public async findOne(): Promise<IEquipments | null> {
        // const json = JSON.parse(await readFile('/DB/equipments.json', 'utf8'));

        return data
    }
}