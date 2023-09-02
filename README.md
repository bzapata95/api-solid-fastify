# APP

GymPass style app.

## RFs (Requisitos funcionales)

- [ ] Debe ser posible registrarse;
- [ ] Debe ser posible autenticarse;
- [ ] Debe ser posible obtener el perfil de un usuario logeado
- [ ] Debe ser posible obtener un número de check-ing realizados por usuarios logeados;
- [ ] Debe ser posible un usuario obtener su historial de check-ing realizados;
- [ ] Debe ser posible un usuario buscar academias próximas;
- [ ] Debe ser posible un usuario buscar academias por nombre;
- [ ] Debe ser posible un usuario realizar check-ing en una academia;
- [ ] Debe ser posible validar un check-ing de un usuario;
- [ ] Debe ser posible registrar una academia;

## RNs (Reglas de negocio)

- [ ] Un usuario no debe poder registrarse con un email duplicado;
- [ ] Un usuario no puede hacer 2 check-ing en un mismo día;
- [ ] Un usuario no puede hacer check-ing si no esta cerca (100m) de academia;
- [ ] Un check-ing puede ser validado a 20 minutos despues de ser creado;
- [ ] Un check-in solo puede ser validado por administradores;
- [ ] Una academia solo puede ser registrada solo por administradores;
- [ ] Un

## RNFs (Requisitos no funcionales)

- [ ] La contraseña del usuario debe estar encriptado;
- [ ] Los datos de la aplicación debe estar almacenado en una base de datos postgres
- [ ] Todas las listras de datos debe estar paginadas con 20 items por página;
- [ ] Un usuario debe ser identificado por un JWT (Json web token);
