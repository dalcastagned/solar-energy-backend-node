import jwt from 'jsonwebtoken';

const generateToken = (email: string, id: string) => {
  return jwt.sign({ email, id }, 'Super Secret Token', {
    expiresIn: '1d',
  });
};

export { generateToken };
