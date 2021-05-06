import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-new-postit",
  templateUrl: "./new-postit.component.html",
  styleUrls: ["./new-postit.component.css"]
})
export class NewPostitComponent implements OnInit {
  @Input() selezioneA: number;
  @Output() newPostEvent = new EventEmitter<postIt>();
  newPost: postIt;

  nTit: string = "";
  nMess: string = "";

  conferma() {
    this.newPost = new postIt();
    //console.log(this.newPost.titolo);
    //ho dovuto fare un casr altrimenti l'elemento mi veniva passato come HTMLElement
    //quindi senza l'attributo value
    this.nTit = (<HTMLInputElement>document.getElementById("nTit")).value;
    //console.log("titolo: " + this.nTit);
    this.nMess = (<HTMLInputElement>document.getElementById("nMess")).value;
    this.newPost.titolo = this.nTit;
    this.newPost.mess = this.nMess;
    if (
      this.newPost.titolo !== (undefined || "" || " ") &&
      this.newPost.mess !== (undefined || "" || " ")
    ) {
      this.newPostEvent.emit(this.newPost);
      this.selezioneA = 0;
      this.nTit = "";
      this.nMess = "";
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
