import { Injectable } from '@nestjs/common';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';

@Injectable()
export class IndexesService {
  create(createIndexDto: CreateIndexDto) {
    return 'This action adds a new index';
  }

  findAll() {
    return `This action returns all indexes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} index`;
  }

  update(id: number, updateIndexDto: UpdateIndexDto) {
    return `This action updates a #${id} index`;
  }

  remove(id: number) {
    return `This action removes a #${id} index`;
  }
}
