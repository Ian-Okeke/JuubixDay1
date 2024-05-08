import { Injectable } from '@nestjs/common';
import { CreateItemDto } from 'src/dto/createItemDto';

@Injectable()
export class ItemsService {

    findItem(id: String){

        return ({
            id: id
        })
    }

    createUser(createItemDto: CreateItemDto){
        return `${createItemDto.name}  just has been created`;
    }
}
