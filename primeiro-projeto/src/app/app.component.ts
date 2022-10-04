import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
  ) {}
  title = 'primeiro-projeto';

  ngOnInit(): void {
    this.authService.isLogged();
  }
}
