import { Module } from '@nestjs/common';
import { StocksModule } from './modules/stocks/stocks.module';
import { CryptosModule } from './modules/cryptos/cryptos.module';
import { IndexesModule } from './modules/indexes/indexes.module';
import { CurrenciesModule } from './modules/currencies/currencies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StocksModule,
    CryptosModule,
    IndexesModule,
    CurrenciesModule,
  ],
})
export class AppModule {}
