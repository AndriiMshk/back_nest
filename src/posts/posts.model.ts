import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../users/users.model'

interface PostCreationAttrs {
	title: string
	content: string
	image: string
	userId: number
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
	@ApiProperty({ example: 1, description: 'post Id' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ApiProperty({ example: 'post title', description: 'post title' })
	@Column({ type: DataType.STRING })
	title: string

	@ApiProperty({ example: 'post content', description: 'post content' })
	@Column({ type: DataType.STRING })
	content: string

	@ApiProperty({ example: 'post image', description: 'post image' })
	@Column({ type: DataType.STRING })
	image: string

	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	userId: number

	@BelongsTo(() => User)
	author: User
}
