import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    console.log(err);
    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorHandler;
