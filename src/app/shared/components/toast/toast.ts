import { Component, inject } from '@angular/core';
import { NotificationService } from '../../../core/services/notification/notification.service';

@Component({
  imports: [],
  selector: 'app-toast',
  styleUrl: './toast.css',
  templateUrl: './toast.html',
})
export class ToastComponent {
  private readonly notificationService = inject(NotificationService);

  readonly message = this.notificationService.toastMessage;
  readonly visible = this.notificationService.toastVisible;
  readonly type = this.notificationService.toastType;


}
