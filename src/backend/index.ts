import express, { Express } from 'express';
import App from './src/Server'
import MultiSearchController from './src/Controller';
import MultiSearchService from './src/Service';
import {EquipmentsModel} from './src/Model';

export const server: Express = express();
const PORT: number = 3001;

const equipmentsModel = new EquipmentsModel()
const multiSearchService = new MultiSearchService(equipmentsModel)
const multiSearchController = new MultiSearchController(multiSearchService)

const app = new App(server, PORT, multiSearchController);

app.start();