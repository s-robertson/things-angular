import { RestService, SocketService } from './feathers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private socketApp: any;
  private restApp: any;

  constructor(restService: RestService, socketService: SocketService) {
    this.restApp = restService.getApp();
    this.socketApp = socketService.getApp();
  }

  authenticate(email, password): Promise {
    return this.socketApp.authenticate({
      type: 'local',
      email: email,
      password: password
    });
  }

  isAuthenticated(): boolean {
    return this.restApp.get('user');
  }
}
