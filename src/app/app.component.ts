import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'janine_test_1';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
