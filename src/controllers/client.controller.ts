import { Request, Response } from "express"
import createClientService from "../services/client/createClient.service";
import deleteClientService from "../services/client/deleteClient.service";
import listAllClientsService from "../services/client/ListAllClients.service";
import loginClientService from "../services/client/loginClient.service";
import ProfileClientService from "../services/client/ProfileClient.service";
import updateClientService from "../services/client/updateClient.service";


export const createClientController = async (req: Request, res:Response) => {
  const data = req.body
  const newUser = await createClientService(data)

  return res.status(201).json(newUser);
}


export const loginClientController = async (req: Request, res: Response) => {
  const data = req.body

  const login = await loginClientService(data)
  return res.status(200).json(login)
}


export const profileClientController = async (req: Request, res: Response) => {
  const client_id = req.client.id
  const profile = await ProfileClientService(client_id)

  return res.status(200).json(profile)
}


export const ListAllClientsController = async (req:Request, res: Response) => {
  const list = await listAllClientsService()

  return res.status(200).json(list)
}


export const updateClientController = async (req: Request, res: Response) => {
  const client_id = req.client.id
  const data = req.body
  const updateClient = await updateClientService(client_id, data)

  return res.status(200).json(updateClient)
}


export const deleteClientController = async (req: Request, res: Response) => {
  const client_id = req.client.id
  await deleteClientService(client_id)

  return res.status(204).send()
}