import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmailsModule } from './emails/emails.module';
import { EmailsService } from './emails/emails.service';

@Module({
  imports: [EmailsModule],
  controllers: [AppController],
  providers: [EmailsService],
})
export class AppModule {}
