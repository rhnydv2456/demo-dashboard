import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  count = 0;
  ngOnInit(): void {}
  signOut() {
    this.authService.logout();
  }

  toggle() {
    this.count++;
  }
}
