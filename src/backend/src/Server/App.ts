import express, { Express, Request, Response, RequestHandler } from 'express';
import 'express-async-errors';
import { IMultiSearchController } from '../Interface';
import MultiSearchRoutes from './Routes';
const cors = require('cors');

export default class App {
    private multiSearchRouter = new MultiSearchRoutes(this.multiSearchController, express.Router())

    constructor(
        private app: Express,
        private PORT: number,
        private multiSearchController: IMultiSearchController
    ) {
        this.config();
        this.routes();
    }

    private routes() {
        this.app.get('/', (_req: Request, res: Response) => {
            res.status(200).json('OK');
        })

        this.app.use('/api/multiSearch', this.multiSearchRouter.router)
    }

    private config() {
        const accessControl: RequestHandler = (_req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
          res.header('Access-Control-Allow-Headers', '*');
          next();
        };

        this.app.use(express.json());
        this.app.use(accessControl);
        this.app.use(cors());
    }

    public start(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Listening on port ${this.PORT}`);      
        });
    }
}