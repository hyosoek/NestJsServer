import { JwtModuleOptions } from '@nestjs/jwt';
import 'dotenv/config';

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET_KEY,
  signOptions: { expiresIn: Number(process.env.JWT_EXPIRE_TIME) },
};
