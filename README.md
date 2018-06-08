#Hoteles almundo - Ejercicio

##levantar app con docker-compose

Correr docker-compose up --build

###ui: localhost:8080

En el Dockerfile se corre *ng build --prod* para minificar y osfuscar el codigo.

Para levantar en modo local sin correr docker, se puede correr *ng serve*

###api: localhost:3000 

Para levantar en modo local sin correr docker, se puede correr npm start (requiere mongodb, se recomienda usar docker-compose)