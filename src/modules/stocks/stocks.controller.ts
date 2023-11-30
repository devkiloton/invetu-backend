import { Controller, Get, Param, Query } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { Interval } from './types/interval';
import { Range } from './types/range';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('/:ids')
  findAll(@Param('ids') ids: string) {
    return this.stocksService.findAll(ids);
  }

  @Get('history/:ids?')
  findHistory(
    @Param('ids') ids: string,
    @Query('range')
    range: Range,
    @Query('interval')
    interval: Interval,
  ) {
    return this.stocksService.findHistory({ ids, range, interval });
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.stocksService.findOne(id);
  }

  @Get('dividends/:ids')
  findDividends(@Param('ids') ids: string) {
    return this.stocksService.findDividends(ids);
  }

  @Get('fuzzy/:id')
  findFuzzy(@Param('id') id: string) {
    return this.stocksService.findFuzzy(id);
  }
}
