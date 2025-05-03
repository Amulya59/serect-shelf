import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerlanding',
  standalone: false,
  templateUrl: './sellerlanding.component.html',
  styleUrl: './sellerlanding.component.css'
})
export class SellerlandingComponent {

  username: string = 'Amulya';
  category: string = 'Fiction';
  catimage: string = 'seller.jpg';
  bookImage: string = 'bookShelf.webp';
  bookName: string = 'Fictionbook';
  bookcost: number = 200;
  noOfbooks: number=250;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  constructor (private router:Router){}

  addbook(){
    this.router.navigate(['/addBook']);
  }
  sellerreg(){
    this.router.navigate(["/login"]);
  }
}
