import { Request, Response, NextFunction, } from "express";

export default function (err: any, req: Request, res: Response, next: NextFunction) {

    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
    next();
}