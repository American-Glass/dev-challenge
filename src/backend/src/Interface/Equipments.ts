export default interface IEquipments {
    EquipmentID: string,
    EquipmentName: string
}

interface IEquipmentsModel {
    findOne: () => Promise<IEquipments | null>,
}

export { IEquipmentsModel }