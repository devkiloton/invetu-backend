import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [HttpModule],
})
export class StocksModule {}
