import jwt from "jsonwebtoken";

process.loadEnvFile;

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(403).json({ error: "Unauthorized access" });

  try {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};
