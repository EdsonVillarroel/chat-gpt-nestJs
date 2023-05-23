import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ChatGptModule } from "./modules/chat-gpt/chat-gpt.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

@Module({
  imports: [
    ChatGptModule,
    // SwaggerModule.forRoot({
    //   // Opciones de configuración de Swagger
    //   // ...
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
