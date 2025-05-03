import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  allBooks = [
    {
      genre: 'Fiction',
      bookName: 'The Great Escape',
      bookDescription: 'A thrilling adventure of freedom and hope.',
      authorName: 'Paul Brickhill',
      quantity: 5,
      yop: 1950,
      price: 299,
      image: 'download (4).jpeg'
    },
    {
      genre: 'Fiction',
      bookName: 'The Silent Patient',
      bookDescription: 'A gripping psychological thriller.',
      authorName: 'Alex Michaelides',
      quantity: 10,
      yop: 2019,
      price: 399,
      image: 'download (5).jpeg'
    },
    {
      genre: 'Fiction',
      bookName: 'Where the Crawdads Sing',
      bookDescription: 'A beautiful coming-of-age story.',
      authorName: 'Delia Owens',
      quantity: 7,
      yop: 2018,
      price: 349,
      image: 'download (6).jpeg'
    },
    {
      genre: 'Fiction',
      bookName: '1984',
      bookDescription: 'A dystopian social science fiction novel.',
      authorName: 'George Orwell',
      quantity: 12,
      yop: 1949,
      price: 259,
      image: 'download (7).jpeg'
    },
    {
      genre: 'Fiction',
      bookName: 'The Alchemist',
      bookDescription: 'A philosophical book about finding one’s destiny.',
      authorName: 'Paulo Coelho',
      quantity: 15,
      yop: 1988,
      price: 299,
      image: 'download (8).jpeg'
    },
    {
      genre: 'Action',
      bookName: 'The Bourne Identity',
      bookDescription: 'A man with no memory must discover who he is.',
      authorName: 'Robert Ludlum',
      quantity: 8,
      yop: 1980,
      price: 399,
      image: 'download (3).jpeg'
    }
  ];

  cartBooks = [
    this.allBooks[0]  
  ];


  buyBook(book: any) {
    // Handle purchase logic here
    alert(`You bought "${book.bookName}" for ₹${book.price}`);
  }

  getSameGenreBooks(currentGenre: string) {
    return this.allBooks
      .filter(book => book.genre === currentGenre && !this.cartBooks.includes(book))
      .slice(0, 5);
  }
}
