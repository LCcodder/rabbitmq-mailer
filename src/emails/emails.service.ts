import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailsService {
  constructor(private readonly mailerService: MailerService) {}

  async send(options: SendEmailDto) {
    try {
      const fullOptions: ISendMailOptions = {
        ...options,
        from: process.env.FROM_EMAIL,
      };
      const emailSend = await this.mailerService.sendMail(fullOptions);
      return emailSend;
    } catch (error) {
      console.log(error);
    }
  }
}
