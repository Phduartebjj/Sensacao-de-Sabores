import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero";

@Component({
  imports: [HeroComponent],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
