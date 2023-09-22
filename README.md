# APP

GymPass style app.

## RFs (Requisitos funcionales)

- [x] Debe ser posible registrarse;
- [x] Debe ser posible autenticarse;
- [x] Debe ser posible obtener el perfil de un usuario logeado
- [x] Debe ser posible obtener un número de check-ing realizados por usuarios logeados;
- [x] Debe ser posible un usuario obtener su historial de check-ing realizados;
- [x] Debe ser posible un usuario buscar academias próximas ( a 10 km);
- [x] Debe ser posible un usuario buscar academias por nombre;
- [x] Debe ser posible un usuario realizar check-ing en una academia;
- [x] Debe ser posible validar un check-ing de un usuario;
- [x] Debe ser posible registrar una academia;

## RNs (Reglas de negocio)

- [x] Un usuario no debe poder registrarse con un email duplicado;
- [x] Un usuario no puede hacer 2 check-ing en un mismo día;
- [x] Un usuario no puede hacer check-ing si no esta cerca (100m) de academia;
- [x] Un check-ing puede ser validado a 20 minutos despues de ser creado;
- [ ] Un check-in solo puede ser validado por administradores;
- [ ] Una academia solo puede ser registrada solo por administradores;

## RNFs (Requisitos no funcionales)

- [x] La contraseña del usuario debe estar encriptado;
- [x] Los datos de la aplicación debe estar almacenado en una base de datos postgres
- [x] Todas las listras de datos debe estar paginadas con 20 items por página;
- [ ] Un usuario debe ser identificado por un JWT (Json web token);
