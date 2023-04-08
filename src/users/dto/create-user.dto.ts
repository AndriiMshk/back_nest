import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: "user@email.com", description: "user email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "password" })
  readonly password: string;
}