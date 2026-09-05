import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header/header';
import { FooterComponent } from './shared/components/footer/footer';
import { ToastComponent } from './shared/components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
