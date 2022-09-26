import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { Contacts } from "../../entities/contacts.entity"



const listCustomerContactsService = async (client_id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts)

  const list = await contactRepository
  .createQueryBuilder("contacts")
  .where({client: {id: client_id}})
  .select(["id", "name", "email", "telephone"])
  .getRawMany()

  return list
}
export default listCustomerContactsService