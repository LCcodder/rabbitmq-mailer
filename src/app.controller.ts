import { Controller } from '@nestjs/common';
import { EmailsService } from './emails/emails.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly emailsService: EmailsService) {}

  @MessagePattern(undefined)
  async sendEmail(@Payload() data: string, @Ctx() context: RmqContext) {
    await this.emailsService.send({
      ...context.getArgByIndex(0).properties.headers,
      html: data,
    });
  }
}
