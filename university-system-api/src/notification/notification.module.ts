import { Module, forwardRef } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EnrollmentModule } from '../enrollment/enrollment.module';

@Module({
  imports: [forwardRef(() => EnrollmentModule)],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
