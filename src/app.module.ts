import { Module } from '@nestjs/common';
import { StocksModule } from './modules/stocks/stocks.module';

@Module({
  imports: [StocksModule],
})
export class AppModule {}
