import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data): string {
    let res = "Hello from App " +data;
    return res;
  }
}
