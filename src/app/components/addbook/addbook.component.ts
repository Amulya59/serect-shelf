import { Component } from '@angular/core';

@Component({
  selector: 'app-addbook',
  standalone: false,
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  genre: string = '';
  bookName: string = '';
  bookDescription: string = '';
  authorName: string = '';
  quantity: number | null = null;
  yop: number | null = null;
  price: number | null = null;
  image: string = '';
}
