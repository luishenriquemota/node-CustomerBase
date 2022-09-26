import { Router } from "express";
import { createClientController, deleteClientController, ListAllClientsController, loginClientController, profileClientController, updateClientController } from "../controllers/client.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";


const routes = Router()

export const clientRoutes = () => {
  routes.post("", createClientController)
  routes.post("/login", loginClientController)
  routes.get("",authTokenMiddleware , ListAllClientsController)
  routes.get("/profile", authTokenMiddleware, profileClientController)
  routes.patch("", authTokenMiddleware, updateClientController)
  routes.delete("", authTokenMiddleware, deleteClientController)

  return routes
}