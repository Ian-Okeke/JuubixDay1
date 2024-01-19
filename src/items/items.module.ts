import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PricesService } from 'src/prices/prices.service';





@Module({
  controllers: [ ItemsController ],
  providers: [ ItemsService, PricesService ],
})

export class ItemsModule {}