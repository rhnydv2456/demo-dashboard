import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });
  public showError: boolean = false;
  ngOnInit() {
    const password = this.profileForm.get('password')?.valueChanges;
    const confirmPassword =
      this.profileForm.get('confirmPassword')?.valueChanges;
    combineLatest([password, confirmPassword]).subscribe((data: any[]) => {
      const pass = data[0];
      const confirm = data[1];
      console.log(pass, confirm);

      if (pass && confirm) {
        if (pass != confirm) {
          this.showError = true;
        } else {
          this.showError = false;
        }
      }
    });
  }
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
