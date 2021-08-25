import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 3032,
  apiAuthToken: process.env.API_AUTH_TOKEN
}));
