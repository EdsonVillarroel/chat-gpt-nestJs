// chatGptIntegration.service.ts

import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import axios from "axios";
import { ChatGptIntegrationInterface } from "./chatGptIntegration.interface";

@Injectable()
export class ChatGptIntegrationService implements ChatGptIntegrationInterface {
  private readonly apiUrl = "https://api.openai.com"; // Reemplaza con la URL correcta de la API de Chat GPT
  private readonly apiKey =
    "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"; // Reemplaza con tu clave de API válida

  async generateResponse(input: string): Promise<string> {
    const endpoint = "/v1/chat/completions";
    const body = {
      role: "user",
      content: input,
    };

    try {
      const response = await axios.post(
        `${this.apiUrl}${endpoint}`,
        {
          model: "gpt-3.5-turbo",
          messages: [body],
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data.choices[0].text;
    } catch (error) {
      console.log("error");
      console.log(error.response);
      // Gestionar errores específicos de la API de Chat GPT
      if (error.response && error.response.status === HttpStatus.UNAUTHORIZED) {
        throw new HttpException(
          "No autorizado para acceder a la API de Chat GPT.",
          HttpStatus.UNAUTHORIZED
        );
      } else if (
        error.response &&
        error.response.status === HttpStatus.BAD_REQUEST
      ) {
        throw new HttpException(
          "Solicitud incorrecta a la API de Chat GPT.",
          HttpStatus.BAD_REQUEST
        );
      } else {
        throw new HttpException(
          "Error en la integración con la API de Chat GPT.",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }
  }
}
