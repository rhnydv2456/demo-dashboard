import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo-dashboard';
  constructor(private authService: AuthenticationService) {}
  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
