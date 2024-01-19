import { Injectable } from '@nestjs/common';

@Injectable()
export class PricesService {

    findPrice(id: String){
        return "the price of "+id +" is 20";
    }
}
