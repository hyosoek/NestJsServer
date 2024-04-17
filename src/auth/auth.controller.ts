import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Account } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-in')
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
  //   return this.authService.signUp(authCredentialDto);
  // }
  @Post()
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Get()
  getAllUser(): Promise<Account[]> {
    return this.authService.getAllUser();
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    // console.log('req', req);
  }
}
