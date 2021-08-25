import { registerAs } from '@nestjs/config';

export default registerAs('http', () => ({
  maxPayloadSize: process.env.MAX_PAYLOAD_SIZE || '50mb',
  corsOrigin: (process.env.CORS_ORIGIN || '').split(','),
}));
