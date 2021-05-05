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
  @Output() newCityEvent = new EventEmitter<postIt>();

  newPost: postIt = new postIt();

  newTitle(_title: string) {
    this.newPost.titolo = _title;
  }

  newMess(_mess: string) {
    this.newPost.mess = _mess;
  }

  newCity(newPost: postIt) {
    this.newCityEvent.emit(newPost);
  }

  conferma() {}

  constructor() {}

  annulla() {
    //console.log(this.selezioneA);
    this.selezioneA = 0;
  }

  ngOnInit() {}
}
