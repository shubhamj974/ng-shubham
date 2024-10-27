// angular import
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedModule } from '../../../theme/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  public email: string = '';
  public password: string = '';
  constructor(private _authService: AuthService) {}
  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];

  onSubmit() {
    console.log('login', this.email, this.password);
    if (this.email && this.password) {
      this._authService.logIn({ email: this.email, password: this.password }).subscribe((res) => {
        console.log('login res', res);
      });
    }
  }
}
