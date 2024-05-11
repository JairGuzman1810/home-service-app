# Home Service App

Este repositorio contiene el código fuente para una aplicación de servicio a domicilio desarrollada con React Native y Expo, que incluye funcionalidades robustas proporcionadas por HyGraph. A continuación, se detallan los aspectos clave de este proyecto:

## Configuración de un entorno React Native robusto con Expo y HyGraph

Para garantizar un entorno de desarrollo estable y eficiente, este proyecto utiliza Expo como plataforma principal para el desarrollo de aplicaciones móviles React Native. La integración de HyGraph agrega capacidades avanzadas para mejorar el rendimiento y la eficiencia de la aplicación.

## Diseño de una interfaz de usuario para una aplicación de servicio a domicilio

La interfaz de usuario de esta aplicación ha sido diseñada para proporcionar una experiencia intuitiva y atractiva para los usuarios. Se han implementado prácticas de diseño modernas, incluyendo la incorporación de pantallas de carga durante la obtención de contenido o al realizar una petición al HyGraph, para crear una interfaz de usuario visualmente atractiva, funcional y receptiva.

## Implementación de características cruciales

- **Listados de servicios**: Los usuarios pueden explorar una variedad de servicios disponibles.
- **Perfiles de usuario**: Los usuarios pueden visualizar su información y cerrar sesión
- **Programación de servicios**: Funcionalidad para programar citas y servicios de manera conveniente.

## Integración de funcionalidades de HyGraph

HyGraph proporciona funcionalidades avanzadas que mejoran el rendimiento y la eficiencia de la aplicación, lo que garantiza una experiencia de usuario fluida y sin problemas.

### Autenticación con Clerk

La autenticación de usuarios en esta aplicación se gestiona utilizando Clerk, que ofrece una solución segura y fácil de usar para la autenticación y la gestión de usuarios. Clerk Expo proporciona una integración perfecta con Expo para una configuración rápida y sin problemas.

## Configuración del archivo .env.local

Para garantizar el correcto funcionamiento de la aplicación, asegúrate de configurar el archivo `.env.local` con las siguientes variables:

- `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY`: Esta clave se obtiene de Clerk y es necesaria para la autenticación de usuarios.
- `EXPO_PUBLIC_API_URL`: Esta URL se obtiene de Hygraph y es necesaria para las comunicaciones con la API.

## Imágenes de la aplicación

<div style="display:flex; justify-content:space-between;">
    <img src="https://github.com/JairGuzman1810/home-service-app/raw/main/github/App-Photos/App-1.jpeg" alt="App-1" width="200"/>
    <img src="https://github.com/JairGuzman1810/home-service-app/raw/main/github/App-Photos/App-2.jpeg" alt="App-2" width="200"/>
    <img src="https://github.com/JairGuzman1810/home-service-app/raw/main/github/App-Photos/App-3.jpeg" alt="App-3" width="200"/>
    <img src="https://github.com/JairGuzman1810/home-service-app/raw/main/github/App-Photos/App-4.jpeg" alt="App-4" width="200"/>
</div>

## Estructura de los esquemas de HyGraph

Para el correcto funcionamiento de la aplicación, se necesitan los siguientes esquemas de HyGraph:

- **Booking**: [Booking Schema](https://github.com/JairGuzman1810/home-service-app/blob/main/github/Hygraph-Schemas/Booking.png)
- **Business-List**: [Business-List Schema](https://github.com/JairGuzman1810/home-service-app/blob/main/github/Hygraph-Schemas/Business-List.png)
- **Category**: [Category Schema](https://github.com/JairGuzman1810/home-service-app/blob/main/github/Hygraph-Schemas/Category.png)
- **Slider**: [Slider Schema](https://github.com/JairGuzman1810/home-service-app/blob/main/github/Hygraph-Schemas/Slider.png)

Estos esquemas deben configurarse correctamente para garantizar el funcionamiento adecuado de la aplicación.

## Tecnologías y dependencias principales

- **React Native**: 0.74.1
- **Expo**: 51.0.2
- **Clerk Expo**: 1.1.0
- **React Navigation**: 6.1.17
- **GraphQL**: 16.8.1
- **Date-fns**: 3.6.0
- **React-native-calendar-picker**: 8.0.4

Este proyecto aprovecha estas tecnologías y dependencias para ofrecer una aplicación móvil de alta calidad y rendimiento para el servicio a domicilio.

## Instrucciones de instalación y uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm o yarn.
3. Configura el archivo `.env.local` con las variables mencionadas anteriormente.
4. Ejecuta el proyecto utilizando `expo start`.
5. ¡Explora y disfruta de la aplicación!

---

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto. ¡Espero que encuentres este repositorio útil y valioso para tus proyectos de desarrollo móvil!
