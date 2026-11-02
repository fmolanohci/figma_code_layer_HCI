# Figma Code Layers HCI

Proyecto base de React, Vite y TypeScript para experimentar con Figma Code Layers.

La app contiene un formulario con los campos **Name** y **Email** y el botón naranja **Crear**. Ambos campos son obligatorios; el navegador valida el formato del correo. Al enviar datos válidos se muestra una confirmación local. Esta demo no guarda ni envía datos a un servidor.

## Desarrollo

Requiere Node.js 22.12+ o 24+ y npm.

```sh
npm install
npm run dev
```

Abre la URL que Vite muestra en la terminal.

## Comprobaciones y compilación

```sh
npm run lint
npm run build
npm run preview
```

`build` comprueba TypeScript y genera la app en `dist/`. `preview` sirve esa compilación localmente.

## Archivos principales

- `src/App.tsx`: formulario y confirmación local.
- `src/App.css`: estilos del formulario.
- `src/index.css`: estilos globales y colores.

Repositorio: [fmolanohci/figma_code_layer_HCI](https://github.com/fmolanohci/figma_code_layer_HCI).
