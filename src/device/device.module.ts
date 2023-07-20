import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from './deivce.model';

@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [SequelizeModule.forFeature([Device])],
})
export class DeviceModule {}
