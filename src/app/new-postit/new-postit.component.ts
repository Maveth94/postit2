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
  nTit: string = "";
  nMess: string = "";

   newTitle(_title: string) {
    this.newPost.titolo = _title;
    console.log(this.newPost.titolo);
  }

  newMess(_mess: string) {
    this.newPost.mess = _mess;
    console.log(this.newPost.mess);
  }


  conferma() {
    this.newPost.titolo = this.nTit;
    this.newPost.mess = this.nMess;
    this.newPostEvent.emit(this.newPost);
    this.selezioneA = 0;
    this.nTit = "";
    this.nMess = "";
  }

  constructor() {}

  annulla() {
    //console.log(this.selezioneA);
    this.selezioneA = 0;
  }

  ngOnInit() {}
}
