import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  create(@Body() deviceDto: CreateDeviceDto) {
    return this.deviceService.create(deviceDto);
  }

  @Get()
  getAllDevices() {
    return this.deviceService.getAllDevices();
  }

  @Get('/:value')
  getOneDevice() {
    return this.deviceService.getOne();
  }
}
