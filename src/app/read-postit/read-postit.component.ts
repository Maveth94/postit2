import { Component, Input, OnInit } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-read-postit",
  templateUrl: "./read-postit.component.html",
  styleUrls: ["./read-postit.component.css"]
})
export class ReadPostitComponent implements OnInit {
  @Input() selezioneC: postIt;

  /*
  default: postIt = {
    titolo: null,
    mess: null
  };*/

  constructor() {}

  clean() {
    this.selezioneC.titolo = undefined;
  }

  ngOnInit() {}
}
