import { ChatGptIntegrationService } from "./chatGptIntegration/chat-gpt-integration.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatGptRepository {
  constructor(
    // eslint-disable-next-line prettier/prettier
    private readonly chatGptIntegrationService: ChatGptIntegrationService
  ) {}

  async generateResponse(input: string): Promise<string> {
    // Puedes agregar cualquier lógica adicional aquí antes de invocar el servicio de integración
    return this.chatGptIntegrationService.generateResponse(input);
  }
}
