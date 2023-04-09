import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
	@ApiProperty({ example: 'user@email.com', description: 'user email' })
	@IsString({ message: 'must be string' })
	@IsEmail({}, { message: 'invalid email' })
	readonly email: string

	@ApiProperty({ example: 'password', description: 'password' })
	@IsString({ message: 'must be string' })
	@Length(4, 16, { message: 'must be 4-16 characters' })
	readonly password: string
}
