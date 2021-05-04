import { Component, Input, OnInit } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-read-postit",
  templateUrl: "./read-postit.component.html",
  styleUrls: ["./read-postit.component.css"]
})
export class ReadPostitComponent implements OnInit {
  @Input() selezioneC: postIt;
  @Input() index: number;
  @Input() postItArr: Array<postIt>;

  constructor() {}

  clean() {
    this.selezioneC.titolo = undefined;
  }

  delete() {
    this.postItArr.splice(this.index, 1);
    this.selezioneC.titolo = undefined;
  }

  ngOnInit() {}
}
