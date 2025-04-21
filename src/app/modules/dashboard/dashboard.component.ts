import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  template: `<app-header></app-header>
    <div class='img-con5'><img src="assets/img/hero.jpg" /></div>
    <app-footer></app-footer>`,
  standalone: false,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
