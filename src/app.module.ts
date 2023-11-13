import { Module } from '@nestjs/common';
import { StocksModule } from './modules/stocks/stocks.module';
import { CryptosModule } from './modules/cryptos/cryptos.module';

@Module({
  imports: [StocksModule, CryptosModule],
})
export class AppModule {}
