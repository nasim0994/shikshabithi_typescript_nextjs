import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  PORT: process.env.PORT || 3015,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV || 'production',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
};
