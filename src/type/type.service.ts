import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.model';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  async create(typeDto: CreateTypeDto) {
    const { name } = typeDto;
    const type = await this.typeRepository.create({ name });

    return type;
  }

  async getAllTypes() {
    const types = await this.typeRepository.findAll({ include: { all: true } });

    return types;
  }
}
