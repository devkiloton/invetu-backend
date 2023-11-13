import { Module } from '@nestjs/common';
import { IndexesService } from './indexes.service';
import { IndexesController } from './indexes.controller';

@Module({
  controllers: [IndexesController],
  providers: [IndexesService],
})
export class IndexesModule {}
