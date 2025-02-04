import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Acceso no autorizado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agregamos el usuario decodificado al request
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido" });
  }
};
