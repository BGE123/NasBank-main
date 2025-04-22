import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header2',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  isModalOpen = false;
  isModalLogOpen = false;

  @ViewChild('navEl', { static: true }) navEl!: ElementRef<HTMLElement>;
  @ViewChild('headerRef', { static: true }) headerRef!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  openModal(event: Event) {
    event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onKeydownEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeModal();
    }
  }

  openModalLog(event: Event) {
    event.preventDefault();
    this.isModalLogOpen = true;
  }

  closeModalLog() {
    this.isModalLogOpen = false;
  }

  onKeydownEscapeLog(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isModalLogOpen) {
      this.closeModalLog();
    }
  }

  handleHover(event: MouseEvent, opacity: number): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('nav__link')) return;

    const links =
      this.navEl.nativeElement.querySelectorAll<HTMLElement>('.nav__link');
    const logo =
      this.navEl.nativeElement.querySelector<HTMLElement>('img.nav__logo');

    links.forEach((linkEl) => {
      if (linkEl !== target) {
        this.renderer.setStyle(linkEl, 'opacity', opacity);
      }
    });

    if (logo) {
      this.renderer.setStyle(logo, 'opacity', opacity);
    }
  }

  ngAfterViewInit(): void {
    const header = this.headerRef.nativeElement;
    const nav = this.navEl.nativeElement;
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        this.renderer.addClass(nav, 'sticky');
      } else {
        this.renderer.removeClass(nav, 'sticky');
      }
    };

    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    observer.observe(header);
  }
}
