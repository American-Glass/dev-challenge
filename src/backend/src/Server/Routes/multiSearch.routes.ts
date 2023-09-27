import { Request, Response, Router } from 'express';
import { IMultiSearchController } from '../../Interface';

export default class MultiSearchRoutes {
    constructor(
        private multiSearchController: IMultiSearchController,
        public router: Router
    ) {
        this.routes();
    }

    private routes() {
        this.router.post(
            '/',
            (req: Request, res: Response) => this.multiSearchController.findOne(req, res)
        )
    }
}