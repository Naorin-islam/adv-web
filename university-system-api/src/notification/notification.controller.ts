import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  sendNotification(
    @Body('studentName') studentName: string,
    @Body('message') message: string,
  ) {
    return this.notificationService.sendNotification(studentName, message);
  }

  @Post('check')
  checkEnrollmentAndNotify(
    @Body('studentName') studentName: string,
    @Body('courseId') courseId: string,
  ) {
    return this.notificationService.checkEnrollmentAndNotify(
      studentName,
      courseId,
    );
  }
}
