import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import httpConfig from './config/http.config';
import { isDevelopmentEnv, isTestEnv } from './app-env';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
        // Configuration
        ConfigModule.forRoot({
          envFilePath: `.env.${process.env.NODE_ENV}`,
          isGlobal: true,
          load: [appConfig, databaseConfig, httpConfig],
        }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
            const nodeEnvIsTest = isTestEnv();
            const url = configService.get('database.url');
            const extra = {
              max: configService.get('database.poolSize'),
            };

            return {
              type: 'postgres',
              url,
              autoLoadEntities: true,
              dropSchema: nodeEnvIsTest,
              synchronize: nodeEnvIsTest,
              extra,
            } as PostgresConnectionOptions;
          },
        }),TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
