import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public user: User;
  constructor() {}

  ngOnInit(): void {
    const user: any = localStorage.getItem('user');
    this.user = JSON.parse(user);
    console.log(this.user);
  }
}
