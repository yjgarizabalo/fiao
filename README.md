# Bienvenido a tu app Expo 👋

Este es un proyecto [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Entorno

| Herramienta | Versión    |
|-------------|-----------|
| Node.js     | 22.19.0   |
| npm         | 9.x o superior |

## Comandos de instalación

| Paso | Comando                                                                                   |
|------|------------------------------------------------------------------------------------------|
| 1    | `npm install --global eas-cli`                                                           |
| 2    | `npx create-expo-app fiao`                                                               |
| 3    | `cd fiao`                                                                                |
| 4    | `eas init --id 56bf5fd1-2c39-45d5-803a-6905a6d28280`                                     |

## Cómo ejecutar la app

| Plataforma | Comando                | Descripción                                                      |
|------------|------------------------|------------------------------------------------------------------|
| Android    | `npm run android`      | Ejecuta la app en un emulador o dispositivo Android conectado    |
| iOS        | `npm run ios`          | Ejecuta la app en un simulador iOS (solo en macOS)               |
| Web        | `npm run web`          | Ejecuta la app en el navegador                                   |

También puedes iniciar el servidor de desarrollo con:

```bash
npx expo start
```

## Primeros pasos

1. Instala las dependencias

   ```bash
   npm install
   ```

2. Inicia la app

   ```bash
   npx expo start
   ```

En la terminal podrás elegir abrir la app en:

- [Emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Simulador iOS](https://docs.expo.dev/workflow/ios-simulator/) (solo macOS)
- [Expo Go](https://expo.dev/go) en tu dispositivo móvil
- Navegador web

Puedes comenzar a desarrollar editando los archivos dentro del directorio **app**. Este proyecto utiliza [ruteo basado en archivos](https://docs.expo.dev/router/introduction).

## Obtener un proyecto limpio

Cuando estés listo, ejecuta:

```bash
npm run reset-project
```

Este comando moverá el código de inicio al directorio **app-example** y creará un directorio **app** en blanco donde puedes comenzar a desarrollar.

## Aprende más

Para aprender más sobre el desarrollo con Expo, revisa los siguientes recursos:

- [Documentación de Expo](https://docs.expo.dev/)
- [Tutorial paso a paso](https://docs.expo.dev/tutorial/introduction/)

## Únete a la comunidad

- [Expo en GitHub](https://github.com/expo/expo)
- [Comunidad en Discord](https://chat.expo.dev)
