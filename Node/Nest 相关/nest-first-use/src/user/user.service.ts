import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo() {
    return {
      name: 'Zeekg',
      age: 20,
    };
  }
}
