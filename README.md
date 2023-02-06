# Solid App

applicacion para administar tareas creada en next.js + typescript

```bash
docker-compose up -d
```

- El -d, significa `_detached_`

- MongoDB URL Local:

```bash
mongodb://localhost:27017/entriesdb
```

## Configurar variables de entorno

Renombrar el archivo `.env.tempalte` a `.env`

## Llenar la base de datos con informacion de pruebas

Llamar:

```url
http://localhost:3000/api/seed
```
