import { IsString, Length, Matches } from 'class-validator';

export class AuthCredentialDto {
  @IsString() // handler level
  @Length(4, 20)
  username: string;

  @IsString()
  @Length(4, 20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;
}
