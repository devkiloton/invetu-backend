import { Module } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { CryptosController } from './cryptos.controller';

@Module({
  controllers: [CryptosController],
  providers: [CryptosService],
})
export class CryptosModule {}
