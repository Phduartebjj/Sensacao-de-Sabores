import { Injectable, signal } from '@angular/core';
import { ToastType } from '../../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly message = signal('');
  private readonly visible = signal(false);
  private readonly type = signal<ToastType>('info');

  private timeoutId?: ReturnType<typeof setTimeout>;

  private readonly id = signal(0);

  readonly toastId = this.id.asReadonly();
  readonly toastMessage = this.message.asReadonly();
  readonly toastVisible = this.visible.asReadonly();
  readonly toastType = this.type.asReadonly();

  show(message: string, type: ToastType): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.id.update((id) => id + 1);

    this.message.set(message);
    this.type.set(type);
    this.visible.set(true);

    this.timeoutId = setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide(): void {
    this.visible.set(false);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
}
