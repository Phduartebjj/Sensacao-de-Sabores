import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { BenefitsComponent } from './benefits/benefits';

@Component({
  imports: [HeroComponent, BenefitsComponent],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
