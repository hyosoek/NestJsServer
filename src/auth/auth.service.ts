import { Injectable } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Account } from './user.entity';
import { typeORMConfig } from 'src/configs/typeorm.config';

@Injectable()
export class AuthService {
  constructor() {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    await Account.createUser(authCredentialDto);
  }

  async getAllUser(): Promise<Account[]> {
    return await Account.getAllUser();
  }
}
