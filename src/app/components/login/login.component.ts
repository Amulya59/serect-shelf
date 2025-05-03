import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  currentView: 'roleSelection' | 'login' | 'register' = 'roleSelection';
  selectedRole: 'buyer' | 'seller' = 'buyer';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const role = this.route.snapshot.queryParamMap.get('role') as 'buyer' | 'seller';
    if (role) {
      this.selectedRole = role;
      this.currentView = 'login';
    }
  }

  selectRole(role: 'buyer' | 'seller' | 'admin') {
    if (role === 'admin') {
      this.currentView = 'login';
    } else {
      this.selectedRole = role;
      //this.currentView = 'register';
    }
  }

  goToRegister(role: 'buyer' | 'seller') {
    this.router.navigate([`/register/${role}`]);
  }
  toggleRole(role: 'buyer' | 'seller') {
    this.selectedRole = role;
    this.router.navigate([], {
      queryParams: { role: role },
      queryParamsHandling: 'merge',
    });
  }  

  onSubmit() {
    // Perform authentication logic here
    // For demonstration, we'll navigate based on the selected role
    if (this.selectedRole === 'buyer') {
      this.router.navigate(['/buyerhome']);
    } else if (this.selectedRole === 'seller') {
      this.router.navigate(['/sellerhome']);
    } else {
      // Handle other roles or show an error
      console.error('Invalid role selected');
    }
  }
}