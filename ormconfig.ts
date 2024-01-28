import { Item } from "src/entities/item.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions =  {

    type: "postgres",
    database: 'testDB',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    entities:[Item],
    synchronize: true,
}

export default config;
