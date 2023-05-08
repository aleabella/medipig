
const express = require('express')
require('dotenv').config()

const app = express()

/*funcion que vamos a controlar en esta ruta en especifico (hago funcion flecha*/ 
app.get('/', (req, res) =>  {
    console.log("peticion recibida")

    res.status(200).send("Hola mundo!")
})

const PORT = process.env.PORT 
/* vamos a elegir en que puerto esta escuchando */

app.listen(PORT, () => {
    console.log("servidor escuchado en puerto  $(PORT)")
 
   
})