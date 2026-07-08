CREATE DATABASE empresa;

USE empresa;

CREATE TABLE clientes(

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    apellido VARCHAR(100) NOT NULL,

    telefono VARCHAR(20) NOT NULL,

    correo VARCHAR(100) NOT NULL,

    ciudad VARCHAR(100) NOT NULL

);

INSERT INTO clientes(nombre,apellido,telefono,correo,ciudad)
VALUES

('Juan','Pérez','98765432','juan@gmail.com','Danlí'),

('María','López','99887766','maria@gmail.com','Tegucigalpa'),

('Carlos','Martínez','94561234','carlos@gmail.com','Juticalpa'),

('Ana','Rodríguez','92345678','ana@gmail.com','Choluteca'),

('José','Hernández','91234567','jose@gmail.com','El Paraíso');