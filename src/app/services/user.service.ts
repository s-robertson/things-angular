import { Injectable } from '@angular/core';
import { SocketService } from './feathers.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private socketApp: any;

  constructor(socketService: SocketService) {
    this.socketApp = socketService.getService('users');
  }

  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.socketApp.create(user)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
