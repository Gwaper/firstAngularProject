import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://i.imgur.com/1J4vfh6.jpg'
  };
  

  constructor() { }
  cache=true;
  hiddenAge(){
    if(this.cache  = !this. cache) {
      return !this.cache;
    } else {
      return this.cache;
    }

  }

  ngOnInit() {
  }

}
