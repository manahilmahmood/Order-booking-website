import {app} from './app.js'
import { config } from 'dotenv'
import { database } from './config/database.js'

config()
database()


app.listen(3000, () => console.log("Server running at http://localhost:3000"))
