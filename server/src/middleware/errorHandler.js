export const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${req.method} ${req.originalUrl}:`, err);

    const statusCode = err.statusCode || err.status || 500;
    const message = process.env.NODE_ENV === 'production' && statusCode === 500
        ? 'An unexpected server error occurred.'
        : err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    });
};

export default errorHandler;
