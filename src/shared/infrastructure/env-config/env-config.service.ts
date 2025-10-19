import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-congi-interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private readonly configService: ConfigService) {}

  getAppPort(): number {
    return this.configService.get<number>('APP_PORT', 3000);
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }
}
