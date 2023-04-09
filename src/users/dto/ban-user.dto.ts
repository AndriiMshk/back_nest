import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class BanUserDto {
	@ApiProperty({ example: 14, description: 'user id' })
	@IsNumber({}, { message: 'must be number' })
	readonly userId: number
	@ApiProperty({ example: 'current reason', description: 'ban reason' })
	@IsString({ message: 'must be string' })
	readonly banReason: string
}
