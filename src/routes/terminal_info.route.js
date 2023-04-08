import express  from 'express'
const Router = express()

import { createTerminalFunction,updateTerminalTypeFunction,findAllTerminalFunction,findOneTerminalFunction,deleteTerminalFunction } from '../controllers/terminal_info.controller'

Router.post("/terminals",createTerminalFunction)
Router.put("/terminals", updateTerminalTypeFunction)
Router.get("/terminals", findAllTerminalFunction)
Router.get("/terminals/:id", findOneTerminalFunction)
Router.delete("/terminals/:id", deleteTerminalFunction)

export default Router

