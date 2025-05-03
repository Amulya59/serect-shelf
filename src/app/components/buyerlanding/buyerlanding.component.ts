import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyerlanding',
  standalone: false,
  templateUrl: './buyerlanding.component.html',
  styleUrl: './buyerlanding.component.css'
})
export class BuyerlandingComponent {
  username: string = 'Amulya';
  category: string = 'Fiction';
  catimage: string = 'seller.jpg';
  bookImage: string = 'bookShelf.webp';
  bookName: string = 'Fictionbook';
  bookcost: number = 200;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private router: Router) {}

goToSellerPage() {
  this.router.navigate(['/sellerhome']);
}
}
