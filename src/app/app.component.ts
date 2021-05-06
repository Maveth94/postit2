import { Component, VERSION } from "@angular/core";
import { ChuckService } from "./postit.service";

export class postIt {
  titolo: string;
  mess: string;
  imp: boolean;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Post-it";

  postItArr: Array<postIt> = [];

  constructor(private obj: ChuckService) {}

  getData() {
    this.obj.getData().subscribe(
      (x: any) => {
        this.postItArr = x;
      },
      err => console.error("Observer got an error: " + err)
    );
  }

  Data = this.getData();

  selezione1: postIt = new postIt();
  selezione2: number = 0;
  index: number = -1;

  leggiMess(_title: string, _mess: string, _num: number) {
    this.selezione1.titolo = _title;
    this.selezione1.mess = _mess;
    this.index = _num;
    this.obj
      .postData(this.postItArr)
      .subscribe(
        (postItArr: Array<postIt>) => {},
        err => console.error("Observer got an error: " + err)
      );
    console.log(this.postItArr);
  }

  addPost(newPost: postIt) {
    this.postItArr.push(newPost);
    this.obj
      .postData(this.postItArr)
      .subscribe(
        (postItArr: Array<postIt>) => {},
        err => console.error("Observer got an error: " + err)
      );
    console.log(this.postItArr);
  }

  creaPost() {
    this.selezione2 = 1;
  }

  azzera() {
    this.selezione2 = 0;
  }
}
