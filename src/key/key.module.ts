import { Module, DynamicModule, Global } from '@nestjs/common';

@Global()
@Module({})
export class KeyModule {
  static forRoot(apiKey: string): DynamicModule {
    return {
      module: KeyModule,
      providers: [
        {
          provide: 'API_KEY',
          useValue: apiKey,
        },
      ],
      exports: ['API_KEY'],
    };
  }
}
