import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from the SERVER';
  }
  getSample(): string {
    return 'OK! I did this and wanted to know if it works! But i got stucked afterwards';
  }
}
