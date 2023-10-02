interface IEquipments {
    EquipmentID: string,
    EquipmentName: string
};

interface IMaterials {
    MaterialID: string,
    MaterialName: string
};

interface IPurchaseOrder {
    PurchaseOrderID: number,
    DeliveryDate: string,
    Supplier: string,
    MaterialID: string,
    MaterialName: string,
    Quantity: number,
    TotalCost: number
};

interface ISalesOrders {
    SalesOrderID: number,
    DeliveryDate: string,
    Customer: string,
    MaterialID: string,
    MaterialName: string,
    Quantity: number,
    TotalValue: number
}

interface IWorkforce {
    WorkforceID: number,
    Name: string,
    Shift: string
}

export { 
    IEquipments,
    IMaterials,
    IPurchaseOrder,
    ISalesOrders,
    IWorkforce
};