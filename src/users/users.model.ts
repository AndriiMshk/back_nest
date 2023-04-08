import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

interface UserCreationAttrs {
	email: string
	password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({ example: '1', description: 'user ID' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ApiProperty({ example: 'user@email.com', description: 'user email' })
	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	email: string

	@ApiProperty({ example: 'password', description: 'user password' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string

	@ApiProperty({ example: 'true', description: 'is the user banned?' })
	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false,
	})
	banned: boolean

	@ApiProperty({ example: 'bad user', description: 'ban reason' })
	@Column({ type: DataType.STRING })
	banReason: string
}
