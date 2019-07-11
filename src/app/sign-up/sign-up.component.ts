import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `<div>
  <h2>{{ emailtagueule }}</h2>
  <input type='email' name="email"  [(ngModel)] ="emailtagueule" />
  </div>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

}
