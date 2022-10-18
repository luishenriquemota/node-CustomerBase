import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"




const verifyClientAlreadyExists = ( req: Request, res: Response, next: NextFunction ) => {

  // client_id = req.client.id

  const userRepository = AppDataSource.getRepository(Client)

}