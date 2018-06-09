# Hoteles almundo - Ejercicio

### levantar app con docker-compose

Correr docker-compose up --build

___
### ui: localhost:8080

En el Dockerfile se corre *ng build --prod* para minificar y osfuscar el codigo.

Para levantar en modo local sin correr docker, se puede correr *ng serve*, y entrar por localhost:4200.
Recordar tocar /hoteles-ui/src/environments/environment.ts si no es usan los puertos por defecto del api.

environments
```
API_URL=http://localhost:3000/hoteles
```
___
### api: localhost:3000 

Para levantar en modo local sin correr docker, se puede correr npm start (requiere mongodb, se recomienda usar docker-compose)

environments
```
MONGO_CONN=mongodb://mongo:27017
```
