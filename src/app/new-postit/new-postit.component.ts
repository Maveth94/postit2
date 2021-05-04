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

  constructor() {}

  annulla() {
    this.selezioneA = 0;
  }

  conferma() {


  }

  ngOnInit() {}
}
