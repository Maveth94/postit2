import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { postIt } from '../app.component';

@Component({
  selector: 'app-new-postit',
  templateUrl: './new-postit.component.html',
  styleUrls: ['./new-postit.component.css']
})
export class NewPostitComponent implements OnInit {
  @Input() selezioneA: number;
  @Output() newPostEvent = new EventEmitter<postIt>();
  @Output() azzera = new EventEmitter<number>();
  newPost: postIt;

  conferma(nTit: string, nMess: string, nImp: boolean) {
    this.newPost = new postIt();
    this.newPost.titolo = nTit;
    this.newPost.mess = nMess;
    this.newPost.imp = nImp;
    if (
      this.newPost.titolo !== ('' || ' ') &&
      this.newPost.mess !== ('' || ' ')
    ) {
      this.newPostEvent.emit(this.newPost);
      console.log(this.newPostEvent.emit(this.newPost));
      this.azzera.emit(0);
    } else {
      alert('Dati mancanti o  scorretti, ritenta');
      return;
    }
  }

  constructor() {}

  annulla() {
    this.azzera.emit(0);
  }

  ngOnInit() {}
}
