import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"



const listAllClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client)

  const listClients = clientRepository
  .createQueryBuilder("client")
  .select(["id", "name", "email", "telephone", "created_at"])
  .getRawMany()
  

  return listClients
}
export default listAllClientsService