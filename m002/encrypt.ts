import * as crypto from 'crypto';

export const encrypt = (value: string): string => {
    const hashedValue = crypto.createHmac('sha256', 'secret').update(value).digest('base64').replace('=', '');

    return hashedValue;
};