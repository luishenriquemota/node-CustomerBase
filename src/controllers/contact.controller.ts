import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";
import deleteContactService from "../services/contact/deleteContact.service";
import listCustomerContactsService from "../services/contact/listCustomersContacts.service";
import updateContactService from "../services/contact/updateContact.service";


export const createContactController = async (req: Request, res: Response) => {
  const client_id = req.client.id
  const data = req.body

  const newContact = await createContactService(data, client_id)
  return res.status(201).json(newContact)
}


export const listCustomerContactsController = async (req:Request, res:Response) => {
  const client_id = req.client.id

  const list = await listCustomerContactsService(client_id)

  return res.status(200).json(list)
}


export const updateContactController = async (req: Request, res: Response) => {
  const {contact_id} = req.params
  const client_id = req.client.id
  const data = req.body

  const updatedContact = await updateContactService(Number(contact_id), client_id, data)
  return res.status(200).json(updatedContact)
}


export const deleteContactController = async (req: Request, res: Response) => {
  const client_id = req.client.id
  const {contact_id} = req.params

  await deleteContactService(Number(contact_id), client_id)

  return res.status(204).send()
}