const conexion = require("./database");

function obtenerClientes(callback){

    conexion.query(

        "SELECT * FROM clientes",

        callback
    );
}

function insertarCliente(cliente, callback){

    conexion.query(

        "INSERT INTO clientes(nombre,apellido,telefono,correo,ciudad) VALUES(?,?,?,?,?)",
        [
            cliente.nombre,
            cliente.apellido,
            cliente.telefono,
            cliente.correo,
            cliente.ciudad

        ],

        callback
    );
}

function actualizarCliente(cliente, callback){

    conexion.query(

        "UPDATE clientes SET nombre=?, apellido=?, telefono=?, correo=?, ciudad=? WHERE id=?",
        [
            cliente.nombre,
            cliente.apellido,
            cliente.telefono,
            cliente.correo,
            cliente.ciudad,
            cliente.id
        ],
        callback
    );
}

function eliminarCliente(id, callback){

    conexion.query(
        "DELETE FROM clientes WHERE id=?",
        [id],
        callback
    );
}

module.exports={

    obtenerClientes,
    insertarCliente,
    actualizarCliente,
    eliminarCliente
};