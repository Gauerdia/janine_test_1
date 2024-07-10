import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mailText:string = "";

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  mailMe(){
    this.mailText = "mailto:info@elegance-smile.de";
    window.location.href = this.mailText;
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }


}
