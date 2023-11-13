import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndexesService } from './indexes.service';
import { CreateIndexDto } from './dto/create-index.dto';
import { UpdateIndexDto } from './dto/update-index.dto';

@Controller('indexes')
export class IndexesController {
  constructor(private readonly indexesService: IndexesService) {}

  @Post()
  create(@Body() createIndexDto: CreateIndexDto) {
    return this.indexesService.create(createIndexDto);
  }

  @Get()
  findAll() {
    return this.indexesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indexesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndexDto: UpdateIndexDto) {
    return this.indexesService.update(+id, updateIndexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indexesService.remove(+id);
  }
}
