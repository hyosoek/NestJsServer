import { Injectable } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Account } from './user.entity';

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
