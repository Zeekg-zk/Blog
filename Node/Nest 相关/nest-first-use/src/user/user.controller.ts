import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getInfo(@Query('id') id: string) {
    return {
      code: 200,
      message: 'user info',
      data: {
        id,
        ...this.userService.getUserInfo(),
      },
    };
  }
}
