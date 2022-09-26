import { Router } from "express";
import { createContactController, deleteContactController, listCustomerContactsController, updateContactController } from "../controllers/contact.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const routes = Router()


export const contactRoutes = () => {
  routes.post("", authTokenMiddleware, createContactController)
  routes.get("", authTokenMiddleware, listCustomerContactsController)
  routes.patch("/:contact_id", authTokenMiddleware, updateContactController)
  routes.delete("/:contact_id", authTokenMiddleware, deleteContactController)

  return routes
}