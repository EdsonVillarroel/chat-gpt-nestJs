// chatGpt.service.ts

import { Injectable } from "@nestjs/common";
import { ChatGptIntegrationService } from "./chatGptIntegration/chat-gpt-integration.service";

@Injectable()
export class ChatGptService {
  constructor(
    private readonly chatGptIntegrationService: ChatGptIntegrationService
  ) {}

  async generateResponse(input: string): Promise<string> {
    // Puedes agregar cualquier lógica adicional aquí antes de invocar el servicio de integración
    return this.chatGptIntegrationService.generateResponse(input);
  }
}
