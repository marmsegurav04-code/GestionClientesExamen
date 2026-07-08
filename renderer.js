const clientes = require("./clientes");

let editando = false;
let idEditar = null;

window.onload = function(){

    cargarClientes();

    document.getElementById("btnGuardar").addEventListener("click", guardar);

    document.getElementById("btnLimpiar").addEventListener("click", limpiar);

};

function guardar(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let ciudad = document.getElementById("ciudad").value;

    if(nombre=="" || apellido=="" || telefono=="" || correo=="" || ciudad==""){

        alert("Todos los campos son obligatorios");
        return;

    }

    let cliente={

        nombre,
        apellido,
        telefono,
        correo,
        ciudad

    };

    if(editando){

        cliente.id=idEditar;

        clientes.actualizarCliente(cliente,(error)=>{

            if(error){

                console.log(error);

            }

            limpiar();
            cargarClientes();

        });

    }else{

        clientes.insertarCliente(cliente,(error)=>{

            if(error){

                console.log(error);

            }

            limpiar();
            cargarClientes();

        });

    }

}

function cargarClientes(){

    clientes.obtenerClientes((error,resultados)=>{

        if(error){

            console.log(error);
            return;

        }

        let tabla=document.getElementById("tablaClientes");

        tabla.innerHTML="";

        resultados.forEach(cliente=>{

            tabla.innerHTML+=`

            <tr>

                <td>${cliente.id}</td>

                <td>${cliente.nombre}</td>

                <td>${cliente.apellido}</td>

                <td>${cliente.telefono}</td>

                <td>${cliente.correo}</td>

                <td>${cliente.ciudad}</td>

                <td>

                <button onclick="editar(${cliente.id},'${cliente.nombre}','${cliente.apellido}','${cliente.telefono}','${cliente.correo}','${cliente.ciudad}')">

                Editar

                </button>

                <button onclick="eliminar(${cliente.id})">

                Eliminar

                </button>

                </td>

            </tr>

            `;

        });

    });

}

function editar(id,nombre,apellido,telefono,correo,ciudad){

    editando=true;
    idEditar=id;

    document.getElementById("nombre").value=nombre;
    document.getElementById("apellido").value=apellido;
    document.getElementById("telefono").value=telefono;
    document.getElementById("correo").value=correo;
    document.getElementById("ciudad").value=ciudad;

}

function eliminar(id){

    if(confirm("¿Desea eliminar este cliente?")){

        clientes.eliminarCliente(id,(error)=>{

            if(error){

                console.log(error);

            }

            cargarClientes();

        });

    }

}

function limpiar(){

    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("telefono").value="";
    document.getElementById("correo").value="";
    document.getElementById("ciudad").value="";

    editando=false;
    idEditar=null;

}