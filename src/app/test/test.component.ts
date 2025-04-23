import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'Elegance Smile - Kosmetische Zahnaufhellung in Dortmund. Wir bieten verschiedene Pakete für strahlend weiße Zähne, von Basic bis Premium. Jetzt online Termin vereinbaren!'
    });
  }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

