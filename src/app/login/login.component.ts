
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
  @Input() Error: boolean;

  constructor() {}

  getKey(chiave: string) {
    this.nuovoKeyEvent.emit(chiave);
  }

  newKey() {
    this.nuovoKEvent.emit();
  }

  ngOnInit() {}
}
