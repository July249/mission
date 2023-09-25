import * as crypto from 'crypto';

type HeaderType = {
    typ: string;
    alg: string;
}

type PayloadType = any;

export default function sign(payload: PayloadType, header: HeaderType = { typ: "JWT", alg: "HS256" }): string {
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=', '');
    // currently, payload has only two private claims: name, phoneNumber
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=', '');
    const signature = crypto.createHmac('sha256', 'secret').update(encodedHeader + '.' + encodedPayload).digest('base64').replace('=', '');

    const token = encodedHeader + '.' + encodedPayload + '.' + signature;

    return token;
};