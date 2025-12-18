import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): any {
    throw new Error('Method not implemented.');
  }
  getHello(): any {
    return{
      success: true,
      message: 'lexander-post-api-online',
      data: 'sistema post api',
      version: '1.0.0',
    }
  }
}