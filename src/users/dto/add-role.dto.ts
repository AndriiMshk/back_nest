import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
	@IsNumber({}, { message: 'must be number' })
	readonly userId: string
	@IsString({ message: 'must be string' })
	readonly value: string
}
