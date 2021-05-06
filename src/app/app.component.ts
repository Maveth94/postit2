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
  postItArrImp: Array<postIt> = [];

  selezione1: postIt = new postIt();
  selezione2: number = 0;
  index: number = -1;
  soloImp: number = 0;

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

  leggiMess(_title: string, _mess: string, _imp: boolean, _num: number) {
    this.selezione1.titolo = _title;
    this.selezione1.mess = _mess;
    this.selezione1.imp = _imp;
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

  impor() {
    if ((this.soloImp = 0)) {
      this.soloImp = 1;
      for (let post of this.postItArr) {
        if (post.imp == true) {
          this.postItArrImp.push(post);
        }
      }
    } else {
      this.postItArrImp = [];
      this.soloImp = 0;
    }
    console.log(this.postItArrImp);
  }

  /*
  tutti() {
    this.postItArrImp = [];
    this.soloImp = false;
  }*/

  creaPost() {
    this.selezione2 = 1;
  }

  azzera() {
    this.selezione2 = 0;
  }
}
