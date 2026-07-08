const mysql = require("mysql2");

const conexion = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Sorakamain:3",
    database: "empresa"

});

conexion.connect((error)=>{

    if(error){

        console.log("Error al conectar");
        console.log(error);
        return;

    }

    console.log("Conectado a MySQL");

});

module.exports = conexion;