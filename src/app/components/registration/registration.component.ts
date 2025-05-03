import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  role: 'buyer' | 'seller' = 'buyer';
  genreLabel: string = 'Select genre you like!!';
  bgImage: string = 'buyer.webp';
  registrationForm!: FormGroup;

  @Input() selectedRole: 'buyer' | 'seller' = 'buyer';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeRole = this.route.snapshot.paramMap.get('role') as 'buyer' | 'seller';
    if (routeRole === 'buyer' || routeRole === 'seller') {
      this.role = routeRole;
    }

    // Form Initialization with Validation Rules
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      genre: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      alert('✅ Registration Successful!');
      this.router.navigate(['/login'], { queryParams: { role: this.role } });
    } else {
      alert('❌ Please fill in all fields correctly!');
    }
  }
}