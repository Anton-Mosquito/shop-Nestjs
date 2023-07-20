import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { TypeModule } from './type/type.module';
import { Type } from './type/type.model';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/brand.model';
import { DeviceModule } from './device/device.module';
import { Device } from './device/deivce.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Type, Brand, Device],
      autoLoadModels: true,
    }),
    UserModule,
    TypeModule,
    BrandModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
