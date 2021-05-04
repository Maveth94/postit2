import { Component, VERSION } from "@angular/core";

export class postIt {
  titolo: string;
  mess: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Post-it";
  //postIt : Array<string> = ["Ciao1", "Ciao2", "Ciao3"];

  PostIt1: postIt = {
    titolo: "Ciao1",
    mess: "come va"
  };

  PostIt2: postIt = {
    titolo: "Ciao2",
    mess: "sglfha"
  };

  postItArr: Array<postIt> = [this.PostIt1, this.PostIt2];

  selezione: postIt = new postIt();

  leggiMess(_title: string, _mess: string) {
    this.selezione.titolo = _title;

    this.selezione.mess = _mess;
  }
}
