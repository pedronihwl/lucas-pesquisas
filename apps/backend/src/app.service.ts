import { Injectable } from '@nestjs/common';
import { greet } from '@packages/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return greet('from Backend');
  }
}
