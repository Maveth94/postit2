import { Component, Input, OnInit } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-new-postit",
  templateUrl: "./new-postit.component.html",
  styleUrls: ["./new-postit.component.css"]
})
export class NewPostitComponent implements OnInit {
  @Input() selezioneA: number;
  @Input() postItArr: Array<postIt>;
  newPost: postIt = new postIt();

  constructor() {}

  annulla() {
    //console.log(this.selezioneA);
    this.selezioneA = 0;
  }

  conferma() {
    console.log("ciao");
    this.newPost.titolo = document.getElementById("titolo").nodeValue;
    console.log(this.newPost.titolo);
    this.newPost.mess = document.getElementById("mess").innerHTML;
    console.log(this.newPost.mess);
  }

  ngOnInit() {}
}
