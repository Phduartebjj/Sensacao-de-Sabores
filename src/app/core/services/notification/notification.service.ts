import { Injectable, signal } from '@angular/core';
import { ToastType } from '../../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly message = signal('');
  private readonly visible = signal(false);
  private readonly type = signal<ToastType>('info');

  readonly toastMessage = this.message.asReadonly();
  readonly toastVisible = this.visible.asReadonly();
  readonly toastType = this.type.asReadonly();

  show(message: string, type: ToastType): void {
    this.message.set(message);
    this.type.set(type);
    this.visible.set(true);

    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide(): void {
    this.visible.set(false);
  }
}
