import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { IChangeClient } from "../../interfaces/client"



const updateClientService = async (client_id: string, changes: IChangeClient) => {

  const clientRepository = AppDataSource.getRepository(Client)

  const client = await clientRepository.findOneBy({id: client_id})

  if (!client) {
    throw new AppError(404, "Client not found.")
  }

  client.name = changes.name ? changes.name : client.name,
  client.email = changes.email ? changes.email : client.email,
  client.telephone = changes.telephone ? changes.telephone : client.telephone

  await clientRepository.save(client)

  return {...client, password:undefined}
}
export default updateClientService