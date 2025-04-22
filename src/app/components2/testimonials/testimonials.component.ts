import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'], // <-- Fix: should be 'styleUrls' (plural)
})
export class TestimonialComponent implements AfterViewInit {
  @ViewChildren('slideRef', { read: ElementRef })
  slides!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('btnLeft', { static: true })
  btnLeft!: ElementRef<HTMLButtonElement>;

  @ViewChild('btnRight', { static: true })
  btnRight!: ElementRef<HTMLButtonElement>;

  @ViewChild('dotsContainer', { static: true })
  dotsContainer!: ElementRef<HTMLElement>;

  curSlide = 0;
  maxSlide = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.maxSlide = this.slides.length;
    this.createDots();
    this.activateDot(0);
    this.goToSlide(0);

    this.renderer.listen(this.btnRight.nativeElement, 'click', () => this.nextSlide());
    this.renderer.listen(this.btnLeft.nativeElement, 'click', () => this.prevSlide());

    // Avoid using document directly if you can, but if necessary:
    this.renderer.listen('document', 'keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    this.renderer.listen(this.dotsContainer.nativeElement, 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      const slide = target.dataset['slide'];
      if (target.classList.contains('dots__dot') && slide != null) {
        this.curSlide = +slide;
        this.goToSlide(this.curSlide);
        this.activateDot(this.curSlide);
      }
    });
  }

  private createDots(): void {
    this.slides.forEach((_, i) => {
      const dot = this.renderer.createElement('button');
      this.renderer.addClass(dot, 'dots__dot');
      this.renderer.setAttribute(dot, 'data-slide', i.toString());
      this.renderer.appendChild(this.dotsContainer.nativeElement, dot);
    });
  }

  private activateDot(slide: number): void {
    const dots = this.dotsContainer.nativeElement.querySelectorAll<HTMLElement>('.dots__dot');
    dots.forEach(dot => this.renderer.removeClass(dot, 'dots__dot--active'));
    const activeDot = this.dotsContainer.nativeElement.querySelector<HTMLElement>(`.dots__dot[data-slide="${slide}"]`);
    if (activeDot) this.renderer.addClass(activeDot, 'dots__dot--active');
  }

  private goToSlide(slide: number): void {
    this.slides.forEach((slideEl, i) => {
      const offset = 100 * (i - slide);
      this.renderer.setStyle(
        slideEl.nativeElement,
        'transform',
        `translateX(${offset}%)`
      );
    });
  }

  private nextSlide(): void {
    this.curSlide = this.curSlide === this.maxSlide - 1 ? 0 : this.curSlide + 1;
    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  }

  private prevSlide(): void {
    this.curSlide = this.curSlide === 0 ? this.maxSlide - 1 : this.curSlide - 1;
    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  }
}
