import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { postIt } from '../app.component';

@Component({
  selector: 'app-read-postit',
  templateUrl: './read-postit.component.html',
  styleUrls: ['./read-postit.component.css']
})
export class ReadPostitComponent implements OnInit {
  @Input() selezioneC: number;
  @Input() postSelez: postIt;
  @Output() azzera = new EventEmitter<number>();

  constructor() {}

  clean() {
    this.azzera.emit(0);
    //this.selezioneC.titolo = undefined;
  }

  ngOnInit() {}
}
