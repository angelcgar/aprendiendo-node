# Proyecto NOC

El objetivo es crear una serie de tareas usando Arquitectura Limpia con Typescript

# dev

1. clonar el archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el comando `npm instal`
4. Levantar la base de datos

```bash
docker compose up -d
```

5. Ejecutar `npm run dev`

## Problemas con permisos al momento de instalar una dependencia de NPM

si tienes este problema

```bash
pnpm install mongoose --save
 EACCES  EACCES: permission denied, scandir '/home/$USER/path/to/projects/05-NOC/mongo/diagnostic.data'
```

ejecuta `chmod -R 755 mongo/` en la raiz de tu proyecto
