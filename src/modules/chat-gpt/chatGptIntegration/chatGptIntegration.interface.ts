// chatGptIntegration.interface.ts

export interface ChatGptIntegrationInterface {
  generateResponse(input: string): Promise<string>;
}
