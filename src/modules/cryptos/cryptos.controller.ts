import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';

@Controller('cryptos')
export class CryptosController {
  constructor(private readonly cryptosService: CryptosService) {}

  @Post()
  create(@Body() createCryptoDto: CreateCryptoDto) {
    return this.cryptosService.create(createCryptoDto);
  }

  @Get()
  findAll() {
    return this.cryptosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cryptosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCryptoDto: UpdateCryptoDto) {
    return this.cryptosService.update(+id, updateCryptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cryptosService.remove(+id);
  }
}
