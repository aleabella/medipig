const express = require('express')

const app = express()

/*funcion que vamos a controlar en esta ruta en especifico (hago funcion flecha*/ 
app.get('/', (req, res) =>  {
    console.log("peticion recibida")
    res.send("Hola mundo!")
})

/* vamos a elegir en que puerto esta escuchando */

app.listen(4000, () => {
    console.log("servidor escuchado en port 4000")

   
})