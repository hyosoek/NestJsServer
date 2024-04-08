import { IsByteLength, IsNotEmpty, Length } from 'class-validator';

export class AuthCredentialDto {
  @IsNotEmpty() // handler level
  @Length(4, 20)
  username: string;

  @IsNotEmpty()
  @Length(4, 20)
  password: string;
}
