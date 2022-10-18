import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entity"
import { AppError } from "../../errors/appError"


const deleteContactService = async (contact_id: number, client_id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts)

  const findContact = await contactRepository.findOneBy({id: contact_id})

  if (!findContact) {
    throw new AppError(404, "Contact not found.")
  }
  console.log(findContact.client.id)
  console.log(client_id)
  if(findContact.client.id != client_id){
    throw new AppError(401, "You are not allowed to do this.")
  }

  await contactRepository.delete(findContact)
}
export default deleteContactService