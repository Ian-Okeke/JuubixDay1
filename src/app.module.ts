import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PricesController } from './prices/prices.controller';
import { PricesModule } from './prices/prices.module';
import { PricesService } from './prices/prices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

// import config from './config/keys'


@Module({
  //imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule],
  imports: [ ItemsModule, PricesModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, ItemsController, PricesController],
  providers: [AppService, ItemsService, PricesService],
})
export class AppModule {}
