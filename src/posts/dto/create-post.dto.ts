import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePostDto {
	@ApiProperty({ example: 'post title', description: 'post title' })
	readonly title: string
	@ApiProperty({ example: 'post content', description: 'post content' })
	readonly content: string
	@ApiProperty({ example: 55, description: 'user id' })
	readonly userId: number
}
