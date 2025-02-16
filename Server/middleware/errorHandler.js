// server/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const stack = process.env.NODE_ENV === 'production' ? null : err.stack;
  
  res.status(statusCode).json({
    code: statusCode,
    message: err.message,
    stack,
    timestamp: new Date().toISOString(),
    correlationId: req.correlationId
  });
};

// Wrap async handlers
export const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
