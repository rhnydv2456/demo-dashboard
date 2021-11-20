import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    console.log(this.profileForm.value);

    const profile = this.profileForm.value;
    if (this.profileForm.valid) {
      this.authService.createUser(profile);
    } else {
      this.toastr.error('Please fill all details correctly!');
    }
  }
}
