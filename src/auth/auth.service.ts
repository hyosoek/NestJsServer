import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Account } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor() {}

  async signIn(authCredentialDto: AuthCredentialDto): Promise<string> {
    const { username, password } = authCredentialDto;
    const user = await Account.findOne({ where: { username: username } });

    // if data exist and password right
    if (user && (await bcrypt.compare(password, user.password))) {
      return 'logIn success';
    } else {
      throw new UnauthorizedException('logIn failed');
    }
  }

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    await Account.createUser(authCredentialDto);
  }

  async getAllUser(): Promise<Account[]> {
    return await Account.getAllUser();
  }
}
