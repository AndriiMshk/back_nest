import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './users.model'
import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'
import { ValidationPipe } from '../pipes/validation.pipe'

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@ApiOperation({ summary: 'create user' })
	@ApiResponse({ status: 200, type: User })
	@UsePipes(ValidationPipe)
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto)
	}

	@ApiOperation({ summary: 'get users' })
	@ApiResponse({ status: 200, type: [User] })
	@Roles('admin')
	@UseGuards(RolesGuard)
	@Get()
	getAll() {
		return this.usersService.getAllUsers()
	}

	@ApiOperation({ summary: 'Give role' })
	@ApiResponse({ status: 200 })
	@Roles('admin')
	@UseGuards(RolesGuard)
	@Post('/role')
	addRole(@Body() dto: AddRoleDto) {
		return this.usersService.addRole(dto)
	}

	@ApiOperation({ summary: 'Ban user' })
	@ApiResponse({ status: 200 })
	@Roles('admin')
	@UseGuards(RolesGuard)
	@Post('/ban')
	banUser(@Body() dto: BanUserDto) {
		return this.usersService.banUser(dto)
	}
}
