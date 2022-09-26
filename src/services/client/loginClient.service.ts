import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { ILogin } from "../../interfaces/client";
import { compareSync } from "bcryptjs";
import { AppError } from "../../errors/appError";
import jwt from "jsonwebtoken";




const loginClientService = async ({email, password}: ILogin) => {

  const clientRepository = AppDataSource.getRepository(Client)

  const findClient = await clientRepository.findOneBy({email: email})

  if(!findClient || !compareSync(password, findClient.password)) {
    throw new AppError(404, "Wrong email/password.")
  }

  const token = jwt.sign({id: findClient.id}, String(process.env.SECRET_KEY), {expiresIn:"1d"})

  return token
}
export default loginClientService