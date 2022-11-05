import dotenv from 'dotenv';
import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import routes from './apps/routes';

export default class App{

    private app: express.Express;

    constructor(){
        dotenv.config();
        this.app = express();
        this.init();
    }

    private init():void{

        this.app.use(cors());

        this.app.use(helmet());

        this.app.use(bodyParser.json());

        const router = Router();
        router.use(routes);
        this.app.use('/v1', router);

        router.use((err: Error, req: Request, res: Response, next: Function) => {
            return res.status(500).json({
                err,
                message: 'Internal server error.',
            });
        });

    }

    start():void{
        this.app.listen(process.env.PORT, ()=>{
            console.log('Server ONLINE in port', process.env.PORT);
        });
    }


}