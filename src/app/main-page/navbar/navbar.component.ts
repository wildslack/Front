import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');

       });

       this.currentUser = this.userService.getCurrentUser();

  }

  Logout() {
    this.userService.logOut();
  }


}
