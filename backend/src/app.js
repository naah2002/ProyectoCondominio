import 'dotenv/config'
import express, { json } from 'express'
import { PORT } from './config/config.js'
import { probarConexion } from './config/db.js'

const aplicacion = express()
aplicacion.use(json())
aplicacion.disable('x-powered-by')


aplicacion.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
