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

  conferma(_tit: string, _mess: string) {
    //console.log(this.newPost.titolo);
    //ho dovuto fare un casr altrimenti l'elemento mi veniva passato come HTMLElement
    //quindi senza l'attributo value
    //this.nTit = _tit;
    //console.log("titolo: " + this.nTit);
    //this.nMess = _mess;
    this.newPost.titolo = _tit;
    this.newPost.mess = _mess;
    console.log("valore" + this.newPost.mess);
    if (
      this.newPost.titolo !== (undefined || "" || " ") &&
      this.newPost.mess !== (undefined || "" || " ")
    ) {
      this.newPostEvent.emit(this.newPost);
      this.selezioneA = 0;
    } else {
      alert("Dati mancanti o  scorretti, ritenta");
      return;
    }
  }

  constructor() {}

  annulla() {
    //console.log(this.selezioneA);
    this.selezioneA = 0;
  }

  ngOnInit() {}
}
