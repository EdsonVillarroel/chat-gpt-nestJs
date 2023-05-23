# Integración de Chat GPT en Nest.js

Este repositorio contiene una integración de Chat GPT en una aplicación Nest.js. Utiliza la API de OpenAI para generar respuestas de chat basadas en mensajes de usuario.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js y npm
- Una cuenta de OpenAI con acceso a la API de Chat GPT

## Configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando el siguiente comando:
3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

Asegúrate de reemplazar `your_openai_api_key` con tu propia clave de API de OpenAI.

## Uso

1. Inicia la aplicación ejecutando el siguiente comando:
Esto iniciará la aplicación Nest.js en modo de desarrollo.

2. Realiza una solicitud POST a `http://localhost:3000/chat` con el siguiente cuerpo:

```json
{
  "message": "Hello"
}
Asegúrate de reemplazar "Hello" con el mensaje que deseas enviar a Chat GPT.

La aplicación enviará el mensaje a la API de Chat GPT y devolverá la respuesta generada. Verás la respuesta en la consola de tu terminal.
