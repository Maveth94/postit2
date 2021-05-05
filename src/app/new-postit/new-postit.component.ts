import { ɵNullViewportScroller } from "@angular/common";
import { NonNullAssert } from "@angular/compiler";
import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-new-postit",
  templateUrl: "./new-postit.component.html",
  styleUrls: ["./new-postit.component.css"]
})
export class NewPostitComponent implements OnInit {
  @Input() selezioneA: number;
  @Input() postItArr: Array<postIt>;
  @Output() newPostEvent = new EventEmitter<postIt>();
  newPost: postIt = new postIt();
  nTit: string = null;
  nMess: string = null;

  newTitle(_title: string) {
    this.nTit = _title;
    console.log(this.nTit);
  }

  newMess(_mess: string) {
    this.nMess = _mess;
    console.log(this.nMess);
  }

  conferma() {
    this.newPost.titolo = this.nTit;
    this.newPost.mess = this.nMess;
    console.log("titolo: " + this.newPost.titolo);
    console.log("mess: " + this.newPost.mess);
    //this.newPostEvent.emit(this.newPost);
  }

  /*
  newTitle(_title: string) {
    this.newPost.titolo = _title;
    console.log(this.newPost.titolo);
  }

  newMess(_mess: string) {
    this.newPost.mess = _mess;
    console.log(this.newPost.mess);
  }

  conferma() {
    //this.newPostEvent.emit(newPost);
  }
*/
  constructor() {}

  annulla() {
    //console.log(this.selezioneA);
    this.selezioneA = 0;
  }

  ngOnInit() {}
}
