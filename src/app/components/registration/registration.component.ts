import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  role: 'buyer' | 'seller' = 'buyer'; 

  constructor(private router: Router,  private route: ActivatedRoute) {}

  @Input() selectedRole: 'buyer' | 'seller' = 'buyer';
  genreLabel: string = 'Select genre you like!!';
  bgImage: string = 'buyer.webp';

  ngOnInit(): void {
    const routeRole = this.route.snapshot.paramMap.get('role') as 'buyer' | 'seller';
    if (routeRole === 'buyer' || routeRole === 'seller') {
      this.role = routeRole;
    }
  }

  submitForm() {
    this.router.navigate(['/login'], { queryParams: { role: this.role } });
  }
}
