// chatGptIntegration.service.spec.ts

import { Test, TestingModule } from "@nestjs/testing";
import { ChatGptIntegrationService } from "./chat-gpt-integration.service";

describe("ChatGptIntegrationService", () => {
  let service: ChatGptIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGptIntegrationService],
    }).compile();

    service = module.get<ChatGptIntegrationService>(ChatGptIntegrationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should generate response from Chat GPT", async () => {
    const input = "Hello";

    const response = await service.generateResponse(input);

    expect(response).toBeTruthy();
    // Agrega aquí más aserciones para verificar el comportamiento esperado del servicio de integración
  });
});
