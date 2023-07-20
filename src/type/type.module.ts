import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from './type.model';

@Module({
  providers: [TypeService],
  controllers: [TypeController],
  imports: [SequelizeModule.forFeature([Type])],
})
export class TypeModule {}
