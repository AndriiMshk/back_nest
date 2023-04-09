import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePostDto {
	@ApiProperty({ example: 'post title', description: 'post title' })
	@IsNumber({}, { message: 'must be number' })
	readonly title: string
	@ApiProperty({ example: 'post content', description: 'post content' })
	@IsString({ message: 'must be string' })
	readonly content: string
	@ApiProperty({ example: 55, description: 'user id' })
	@IsNumber({}, { message: 'must be number' })
	readonly userId: number
}
