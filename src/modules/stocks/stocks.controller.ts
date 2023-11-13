import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('/:ids')
  findAll(@Param('ids') ids: string) {
    return this.stocksService.findAll(ids);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.stocksService.findOne(id);
  }

  @Get('dividends/:id')
  findDividends(@Param('id') id: string) {
    return this.stocksService.findDividends(id);
  }

  @Get('fuzzy/:id')
  findFuzzy(@Param('id') id: string) {
    return this.stocksService.findFuzzy(id);
  }
}
