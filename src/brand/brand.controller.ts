import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  create(@Body() brandDto: CreateBrandDto) {
    return this.brandService.create(brandDto);
  }

  @Get()
  getAllBrands() {
    return this.brandService.getAllBrands();
  }
}
