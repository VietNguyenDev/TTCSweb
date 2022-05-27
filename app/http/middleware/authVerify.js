import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authorization = req.header("Authorization");
  if (!authorization) return res.status(401).send({ message: "Access denied. No token provided." });
  const token = authorization.slice(7, authorization.length);
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  }catch(err) {
    res.status(400).send("Invalid token.");
  }
}