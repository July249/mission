import * as crypto from 'crypto';

const salt = 'mungchungee';
const hashedSalt = Buffer.from(salt).toString('base64').replace('=', '');

export const encrypt = (password: string) => {
  const hashedPassword = crypto
    .pbkdf2Sync(password, hashedSalt, 9876, 64, 'sha256')
    .toString('base64')
    .replace('=', '');

  return {
    hashedPassword,
    hashedSalt,
  };
};
