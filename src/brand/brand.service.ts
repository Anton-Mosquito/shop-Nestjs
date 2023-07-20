import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

  async create(@Body() brandDto: CreateBrandDto) {
    const { name } = brandDto;
    const brand = await this.brandRepository.create({ name });

    return brand;
  }

  async getAllBrands() {
    const brands = await this.brandRepository.findAll({
      include: { all: true },
    });

    return brands;
  }
}
