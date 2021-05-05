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

  PostIt1: postIt = {
    titolo: "Ciao1",
    mess: "come va"
  };

  PostIt2: postIt = {
    titolo: "Ciao2",
    mess: "sglfha"
  };

  postItArr: Array<postIt> = [this.PostIt1, this.PostIt2];

  selezione1: postIt = new postIt();
  selezione2: number = 0;
  index: number = -1;

  leggiMess(_title: string, _mess: string, _num: number) {
    this.selezione1.titolo = _title;
    this.selezione1.mess = _mess;
    this.index = _num;
  }

  addCity(newPost: postIt) {
    this.postItArr.push(newPost);
  }

  azzera() {
    this.selezione2 = 0;
  }
}
