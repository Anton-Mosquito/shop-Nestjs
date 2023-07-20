import { Body, Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  // @ApiOperation({ summary: 'Создание пользователя' })
  // @ApiResponse({ status: 200, type: User })
  // @Post()
  registration(@Body() userDto: CreateUserDto) {
    return this.usersService.registration(userDto);
  }

  login() {
    return this.usersService.login();
  }

  check() {
    return this.usersService.check();
  }

  // @ApiOperation({ summary: 'Получить всех пользователей' })
  // @ApiResponse({ status: 200, type: [User] })
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
