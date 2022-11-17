import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(): void {
    this.auth.authenticate(this.user).subscribe(
      (data) => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('/view-survey');
        } else {
          this.errorMessage = data.msg;
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
