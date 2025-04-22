import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  standalone: false,
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss',
})
export class OperationsComponent {
  activeTab = 1;

  tabs = [
    {
      title: 'Instant Transfers',
      icon: 'assets/img/icons.svg#icon-upload',
      header: 'Transfer money to anyone, instantly! No fees, no BS.',
      text: `With Nas Bank, you can send money to other banks free as much as 15 times every month void of any hidden bank charge. You can send to Nas Bnk Account unlimited as many times as possible.`,
    },
    {
      title: 'Instant Loans',
      icon: 'assets/img/icons.svg#icon-home',
      header:
        'Buy a home/car or make your dreams come true, with instant loans.',
      text: `Your dream to build a home or even buy the latest car is now within your reach. With our low interest rates and very flexible payment plans, you can now secure loan to purchase that car, house or gadget. You don't have to stare at your dream any more. Get your loan today.`,
    },
    {
      title: 'Instant Closing',
      icon: 'assets/img/icons.svg#icon-user-x',
      header: 'No longer need your account? No problem! Close it instantly.',
      text: `Whatever your reason, closing your account does not have to be a hassle. Just a few steps and you're done, no need to put a call across or leave your home.`,
    },
  ];

  selectTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
  getTabClasses(index: number): string[] {
    return [
      `operations__tab--${index + 1}`,
      this.activeTab === index + 1 ? 'operations__tab--active' : '',
    ];
  }

  getContentClasses(index: number): string[] {
    return [
      `operations__content--${index + 1}`,
      this.activeTab === index + 1 ? 'operations__content--active' : '',
    ];
  }
}
