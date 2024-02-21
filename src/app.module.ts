import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { AuthMiddleware } from './auth.middleware';
import { KeyModule } from './key/key.module';

@Module({
  imports: [DogsModule, KeyModule.forRoot('your_api_key')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('dogs');
  }
}
