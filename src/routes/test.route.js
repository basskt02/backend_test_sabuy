import express  from 'express'
const Router = express()
import { updateMinValue} from './../controllers/test.controller'


Router.put("/update", updateMinValue)

export default Router
