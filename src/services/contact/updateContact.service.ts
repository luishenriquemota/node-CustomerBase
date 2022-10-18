import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entity"
import { AppError } from "../../errors/appError"
import { IContact } from "../../interfaces/contact"

const updateContactService = async (contact_id: number, client_id: string, change: IContact) => {
  const contactRepository = AppDataSource.getRepository(Contacts)

  const findContact = await contactRepository.findOneBy({id: contact_id})

  if(!findContact) {
    throw new AppError(404, "Contact not found.")
  }

  if(findContact.client.id != client_id){
    throw new AppError(401, "You are not allowed to do this.")
  }

  findContact.name = change.name? change.name : findContact.name
  findContact.email = change.email? change.email : findContact.email
  findContact.telephone = change.telephone? change.telephone : findContact.telephone

  await contactRepository.save(findContact)

  return {...findContact, client:undefined}
}
export default updateContactService