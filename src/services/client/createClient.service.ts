import { IClient, IReturnClient } from "../../interfaces/client"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { hash } from "bcryptjs"
import AppDataSource from "../../data-source"


const createClientService = async ({name, email, password, telephone}: IClient) => {
  const clientRepository = AppDataSource.getRepository(Client)

  const emailAlreadyInUse = await clientRepository.findOneBy({email: email})

  if (emailAlreadyInUse) throw new AppError(404, "This email is already in use.");

  const hashedPassword = await hash(password, 10)

  const client = clientRepository.create({
    name,
    email,
    password: hashedPassword,
    telephone,
  })
  await clientRepository.save(client)

  const returnClient: IReturnClient = {
    id: client.id,
    name: client.name,
    email: client.email,
    telephone: client.telephone,
    created_at: client.created_at
  }

  return returnClient
}
export default createClientService