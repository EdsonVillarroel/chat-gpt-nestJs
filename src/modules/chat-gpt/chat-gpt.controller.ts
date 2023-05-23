import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ChatGptService } from "./chat-gpt.service";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ChatGPTDto } from "src/common/chat-gpt.Dto";

@Controller("chat-gpt")
@ApiTags("Chat GPT")
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @ApiOperation({ summary: "Generar respuesta de Chat GPT" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Respuesta generada exitosamente",
  })
  @Post("generate")
  async generateResponse(
    @Body() chatDto: ChatGPTDto
  ): Promise<{ response: string }> {
    const response = await this.chatGptService.generateResponse(chatDto.input);
    return { response };
  }
}
