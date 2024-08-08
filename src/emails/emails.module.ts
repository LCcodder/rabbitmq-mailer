import { Global, Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { MailerModule } from '@nestjs-modules/mailer';
import configuration from 'src/config/configuration';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'QueueTest',
        host: configuration().smtp.host,
        port: configuration().smtp.port,
        auth: {
          user: configuration().smtp.auth.user,
          pass: configuration().smtp.auth.pass,
        },
      },
      defaults: {
        from: configuration().smtp.from,
      },
    }),
  ],
  providers: [EmailsService],
})
export class EmailsModule {}
