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

  /*

  nTit: string = "";
  nMess: string = "";
  nImp: boolean = false;
  */

  conferma(nTit: string, nMess: string, nImp: boolean) {
    this.newPost = new postIt();
    this.newPost.titolo = nTit;
    this.newPost.mess = nMess;

    //ho dovuto fare un casr altrimenti l'elemento mi veniva passato come HTMLElement
    //quindi senza l'attributo value
    //this.nTit = (<HTMLInputElement>document.getElementById("nTit")).value;
    //console.log("titolo: " + this.nTit);
    //this.nMess = (<HTMLInputElement>document.getElementById("nMess")).value;
    console.log(nImp);
    //console.log(<HTMLInputElement>document.getElementById("check").value);
    //this.nImp = (<HTMLInputElement>document.getElementById("check")).value;
    //this.newPost.titolo = this.nTit;
    //this.newPost.mess = this.nMess;
    if (
      this.newPost.titolo !== ("" || " ") &&
      this.newPost.mess !== ("" || " ")
    ) {
      this.newPostEvent.emit(this.newPost);
      this.selezioneA = 0;
      //this.nTit = "";
      //this.nMess = "";
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
