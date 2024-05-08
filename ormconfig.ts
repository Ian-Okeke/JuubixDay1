import { Bid } from "src/entities/bid.entity";
import { Item } from "src/entities/item.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions =  {

    type: "postgres",
    database: 'testDB',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    entities:[Item, Bid, User],
    synchronize: true,
}

export default config;
