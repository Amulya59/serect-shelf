import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  bookcost: number=250;
  bookName: string="bookName";
  bookImage: string="bookShelf.webp"
  isScrolled = false;

  constructor(private router: Router){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  register(){
    this.router.navigate(["/login"]);
  }
}
