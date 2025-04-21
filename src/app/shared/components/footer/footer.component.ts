import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer">
    <ul class="footer__nav">
      <li class="footer__item">
        <a class="footer__link" href="#">About</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Pricing</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Terms of Use</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Privacy Policy</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Careers</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Blog</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Contact Us</a>
      </li>
    </ul>
  </footer>`,
  standalone: false,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
