puedes usar estos pasos para ejecutar typescript con nodejs

## Usando --watch

node>=18

intala lo necesario

```bash
npm i -D tsx @types/node typescript
```

hacer una prueva
```bash
npx tsx example.ts
```

si todo salio bien, puedes intentar levatantar tu app

```bash
node --import=tsx --watch src/app.ts
```