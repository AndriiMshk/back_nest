import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AddRoleDto {
	@ApiProperty({ example: 5, description: 'user id' })
	@IsNumber({}, { message: 'must be number' })
	readonly userId: number
	@ApiProperty({ example: 'admin', description: 'new user role' })
	@IsString({ message: 'must be string' })
	readonly value: string
}
