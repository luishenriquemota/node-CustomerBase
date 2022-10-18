import { DataSource } from "typeorm";
import "dotenv/config";


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false, // não me lembro para que serve
  logging: true, //acho que é para mostrar os logs de erro caso de algum
  entities: ["src/entities/*.ts"], // estou pegando todas as entities de dentro da pasta
  migrations: ["src/migrations/*.ts"], // criando a pasta migrations caso ela não exista, para depois poder roda-las
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", err)
  })
  export default AppDataSource