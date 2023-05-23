import { Test, TestingModule } from "@nestjs/testing";
import { ChatGptService } from "./chat-gpt.service";

describe("ChatGtpService", () => {
  let service: ChatGptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGptService],
    }).compile();

    service = module.get<ChatGptService>(ChatGptService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
