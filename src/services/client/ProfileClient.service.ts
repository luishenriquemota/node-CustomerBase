import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";


const ProfileClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client)

  const client = await clientRepository.findOneBy({id: id})

  if(!client) {
    throw new AppError(404, "Client not found.")
  }

  return {...client, password: undefined}
}
export default ProfileClientService