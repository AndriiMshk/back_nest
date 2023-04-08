import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
	@ApiProperty({ example: 'user', description: 'role_description' })
	readonly value: string
	@ApiProperty({ example: 'user', description: 'role_description' })
	readonly description: string
}
