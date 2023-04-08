import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Role } from './roles.model'

@ApiTags('roles')
@Controller('roles')
export class RolesController {
	constructor(private roleService: RolesService) {}

	@ApiOperation({ summary: 'create user role' })
	@ApiResponse({ status: 200, type: Role })
	@Post()
	create(@Body() roleDto: CreateRoleDto) {
		return this.roleService.createRole(roleDto)
	}

	@ApiOperation({ summary: 'get users roles' })
	@ApiResponse({ status: 200, type: [Role] })
	@Get('/:value')
	getByValue(@Param('value') value: string) {
		return this.roleService.getRoleByValue(value)
	}
}
