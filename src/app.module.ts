import { Module } from '@nestjs/common';
import { StocksModule } from './modules/stocks/stocks.module';
import { CryptosModule } from './modules/cryptos/cryptos.module';
import { IndexesModule } from './modules/indexes/indexes.module';

@Module({
  imports: [StocksModule, CryptosModule, IndexesModule],
})
export class AppModule {}
