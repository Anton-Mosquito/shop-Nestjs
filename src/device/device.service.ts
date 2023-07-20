import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './deivce.model';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device) private deviceRepository: typeof Device) {}

  async create(@Body() deviceDto: CreateDeviceDto) {
    const {name, price, brandId, typeId, info} = deviceDto;
  }

  async getAllDevices() {}

  async getOne() {}
}
