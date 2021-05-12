/**
1) Far sì che se la pass è sbagliata non accedi, 
2) far il pulsante indietro nel main in modo che si possa inserire una nuova chiave
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() nuovoKeyEvent = new EventEmitter<string>();
  @Output() nuovoKEvent = new EventEmitter<string>();
  @Input() NKey: string;

  constructor() {}

  getKey(chiave: string) {
    this.nuovoKeyEvent.emit(chiave);
  }

  newKey() {
    this.nuovoKEvent.emit();
  }

  ngOnInit() {}
}
