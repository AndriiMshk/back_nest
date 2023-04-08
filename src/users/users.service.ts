import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.model'
import { RolesService } from '../roles/roles.service'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		private roleService: RolesService,
	) {}

	async createUser(dto: CreateUserDto) {
		const role = await this.roleService.getRoleByValue('user')
		const user = await this.userRepository.create(dto)
		await user.$set('roles', [role.id])
		user.roles = [role]
		return user
	}

	async getAllUsers() {
		return await this.userRepository.findAll({ include: { all: true } })
	}

	async getUserByEmail(email: string) {
		return this.userRepository.findOne({ where: { email }, include: { all: true } })
	}

	async addRole(dto: AddRoleDto) {
		console.log('service')
		const user = await this.userRepository.findByPk(dto.userId)
		const role = await this.roleService.getRoleByValue(dto.value)
		if (role && user) {
			await user.$add('role', role.id)
			return dto
		}
		throw new HttpException('user or role was not defined', HttpStatus.NOT_FOUND)
	}

	async banUser(dto: BanUserDto) {
		const user = await this.userRepository.findByPk(dto.userId)
		if (!user) {
			throw new HttpException('user was not defined', HttpStatus.NOT_FOUND)
		}
		user.banned = true
		user.banReason = dto.banReason
		await user.save()
		return user
	}
}
