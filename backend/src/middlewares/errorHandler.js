export const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}]`, err.message);

  const statusCode = err.statusCode || 500;
  console.log(err.isOperational);
  const message = err.isOperational
    ? err.message
    : "An unexpected error occurred";

  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  res.status(statusCode).json({ error: message });
};
