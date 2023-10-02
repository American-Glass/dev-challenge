import { Request, Response, Router } from 'express';
import { IMultiSearchController } from '../../Interface';
import { ValidadeInput } from '../../Middleware';

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
            ValidadeInput.joi,
            (req: Request, res: Response) => this.multiSearchController.findAllByName(req, res)
        )
    }
}