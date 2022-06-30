import jwt from 'jsonwebtoken';

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const parts = authHeader.split(' ');

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted' });
  }

  jwt.verify(token, 'Super Secret Token', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
    req.userId = decoded.id;
    return next();
  });
};

export { protect };
