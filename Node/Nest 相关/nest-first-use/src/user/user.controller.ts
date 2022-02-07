import {
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { TimeoutInterceptor } from '../common/interceptors/timeout.interceptor';
import { RolesGuard } from '../common/guards/roles.guard';
import { HttpExeceptionFilter } from '../common/filters/http-exeception.filter';

@Controller('user')
@UseInterceptors(new TimeoutInterceptor()) // 使用拦截器
@UseGuards(RolesGuard) // 使用守卫
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

  @Post()
  @UseFilters(new HttpExeceptionFilter()) // 使用过滤器
  createUser(): string {
    return 'Successfully created';
  }
}
