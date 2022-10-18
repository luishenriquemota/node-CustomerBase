import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"



const deleteClientService = async (client_id: string) => {
  const clientRepository = AppDataSource.getRepository(Client)

  const findClient = await clientRepository.findOneBy({id:client_id})

  if(!findClient) {
    throw new AppError(404, "Client not found.")
  }

  await clientRepository.delete({id: client_id})
}
export default deleteClientService