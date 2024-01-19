import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateItemDto } from '../dto/createItemDto';
import { ItemsService } from './items.service';
import { PricesService } from 'src/prices/prices.service';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService, private readonly pricesService: PricesService){}

    @Get()
        getItems(): String {
            return "All items.. ";
        }
    
    @Get(':id')
        findItem(@Param('id') id:String)  {
            return this.itemsService.findItem(id);
            
        }
    

    @Post()
        addItem(@Body() createItemDto: CreateItemDto){
                return this.itemsService.createUser(createItemDto);
        }
    
    @Get(':id/price')
        getPrice(@Param('id') id:String){
            return this.pricesService.findPrice(id);
        }
}



