import { Component, Input, OnInit } from "@angular/core";
import { postIt } from "../app.component";

@Component({
  selector: "app-read-postit",
  templateUrl: "./read-postit.component.html",
  styleUrls: ["./read-postit.component.css"]
})
export class ReadPostitComponent implements OnInit {
  @Input() index: number;
  @Input() postItArr: Array<postIt>;

  postIt1: postIt = new postIt();

  constructor() {}

  leggi() {
    this.postIt1.titolo = this.postItArr[this.index].titolo;
    this.postIt1.mess = this.postItArr[this.index].mess;
  }
  clean() {
    this.index = -1;
  }

  delete() {
    this.postItArr.splice(this.index, 1);
    this.index = -1;
  }

  ngOnInit() {}
}
