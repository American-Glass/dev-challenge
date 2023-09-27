import express, { Express } from 'express';
import App from './src/Server'
import MultiSearchController from './src/Controller';
import MultiSearchService from './src/Service';
import { MultiSearchModel } from './src/Model';
import { 
    IEquipments,
    IMaterials,
    IPurchaseOrder,
    ISalesOrders,
    IWorkforce
} from './src/Interface';

import equipmentsDB from './src/DB/equipments.json';
import materialsDB from './src/DB/materials.json';
import purchaseOrdersDB from './src/DB/purchase_orders.json';
import salesOrdersDB from './src/DB/sales_orders.json';
import workforceDB from './src/DB/workforce.json'

export const server: Express = express();
const PORT: number = 3001;

export const equipmentsModel = new MultiSearchModel<IEquipments>(equipmentsDB);
export const materialsModel = new MultiSearchModel<IMaterials>(materialsDB);
export const purchaseOrdersModel = new MultiSearchModel<IPurchaseOrder>(purchaseOrdersDB);
export const salesOrdersModel = new MultiSearchModel<ISalesOrders>(salesOrdersDB);
export const workforceModel = new MultiSearchModel<IWorkforce>(workforceDB);

const multiSearchService = new MultiSearchService(
    equipmentsModel,
    materialsModel,
    purchaseOrdersModel,
    salesOrdersModel,
    workforceModel
)
const multiSearchController = new MultiSearchController(multiSearchService);

const app = new App(server, PORT, multiSearchController);

app.start();
