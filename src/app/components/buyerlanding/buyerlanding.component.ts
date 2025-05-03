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
  selectedCategoryIndex: number = 0;

  categories = [
    {
      name: 'Fiction',
      image: 'download.jpeg',
      books: [
        { name: 'The Great Gatsby', image: 'download (6).jpeg', cost: 250 },
        { name: 'To Kill a Mockingbird', image: 'download (7).jpeg', cost: 300 },
        { name: '1984', image: 'download (5).jpeg', cost: 280 },
        { name: 'Pride and Prejudice', image: 'download (8).jpeg', cost: 270 },
        { name: 'The Catcher in the Rye', image: 'download (4).jpeg', cost: 260 }
      ]
    },
    {
      name: 'Non-Fiction',
      image: 'images.jpeg',
      books: [
        { name: 'Sapiens', image: 'download (8).jpeg', cost: 350 },
        { name: 'Educated', image: 'download (5).jpeg', cost: 320 },
        { name: 'Becoming', image: 'download (7).jpeg', cost: 340 },
        { name: 'The Wright Brothers', image: 'download (6).jpeg', cost: 310 },
        { name: 'Unbroken', image: 'download (4).jpeg', cost: 330 }
      ]
    },
    {
      name: 'Mystery',
      image: 'download (1).jpeg',
      books: [
        { name: 'Gone Girl', image: 'download (4).jpeg', cost: 290 },
        { name: 'The Girl with the Dragon Tattoo', image: 'download (6).jpeg', cost: 300 },
        { name: 'Big Little Lies', image: 'download (8).jpeg', cost: 280 },
        { name: 'In the Woods', image: 'download (7).jpeg', cost: 270 },
        { name: 'The Da Vinci Code', image: 'download (5).jpeg', cost: 310 }
      ]
    },
    {
      name: 'Science',
      image: 'download (2).jpeg',
      books: [
        { name: 'A Brief History of Time', image: 'download (6).jpeg', cost: 350 },
        { name: 'The Selfish Gene', image: 'download (8).jpeg', cost: 320 },
        { name: 'The Gene', image: 'download (5).jpeg', cost: 340 },
        { name: 'Cosmos', image: 'download (4).jpeg', cost: 330 },
        { name: 'The Elegant Universe', image: 'download (7).jpeg', cost: 310 }
      ]
    },
    {
      name: 'Fantasy',
      image: 'download (3).jpeg',
      books: [
        { name: 'Harry Potter and the Sorcerer\'s Stone', image: 'download (4).jpeg', cost: 280 },
        { name: 'The Hobbit', image: 'download (5).jpeg', cost: 290 },
        { name: 'The Name of the Wind', image: 'download (8).jpeg', cost: 300 },
        { name: 'Mistborn', image: 'download (6).jpeg', cost: 310 },
        { name: 'The Way of Kings', image: 'download (7).jpeg', cost: 320 }
      ]
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private router: Router) {}

goToSellerPage() {
  this.router.navigate(['/sellerhome']);
}
sellerreg(){
  this.router.navigate(["/login"]);
}


selectCategory(index: number) {
  this.selectedCategoryIndex = index;
}

gotocart(){
  this.router.navigate(["/addCart"]);
}
}
