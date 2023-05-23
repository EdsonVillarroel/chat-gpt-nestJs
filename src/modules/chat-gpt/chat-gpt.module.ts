import { Module } from "@nestjs/common";
import { ChatGptController } from "./chat-gpt.controller";
import { ChatGptService } from "./chat-gpt.service";
import { ChatGptRepository } from "./chatGpt.repository";
import { ChatGptIntegrationService } from "./chatGptIntegration/chat-gpt-integration.service";

@Module({
  controllers: [ChatGptController],
  providers: [ChatGptService, ChatGptRepository, ChatGptIntegrationService],
})
export class ChatGptModule {}
