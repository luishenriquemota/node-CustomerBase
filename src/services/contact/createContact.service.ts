import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { Client } from "../../entities/client.entity";
import { IClient } from "../../interfaces/client";
import { IReturnContactCreate } from "../../interfaces/contact";
import { AppError } from "../../errors/appError";



const createContactService = async ({name, email, telephone}: IClient, client_id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts)
  const clientRepository = AppDataSource.getRepository(Client)

  const client = await clientRepository.findOneBy({id: client_id,})

  if (!client) {
    throw new AppError(404, "Client not found.")
  }

  const nameAlreadyInUse = await clientRepository.find({where:{id: client.id, contacts:{name:name}}})

  if(nameAlreadyInUse.length > 0) {
    throw new AppError(404, "This client already has a contact registered with this name.")
  }


  const contact = contactRepository.create({
    name,
    email,
    telephone,
    client
  })

  await contactRepository.save(contact)

  const returnContact: IReturnContactCreate = {
    id: contact.id,
    name: contact.name,
    email: contact.email,
    telephone: contact.telephone,
    client: {
      id: contact.client.id,
      name: contact.client.name
    }
  }

  return returnContact
}
export default createContactService