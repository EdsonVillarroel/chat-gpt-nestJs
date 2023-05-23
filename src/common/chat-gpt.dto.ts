import { ApiProperty } from "@nestjs/swagger";

export class ChatGPTDto {
  @ApiProperty()
  input: string;
}
