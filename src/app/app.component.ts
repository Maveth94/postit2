import { Component, VERSION } from "@angular/core";
import { ChuckService } from "./postit.service";

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

  postItArr: Array<postIt> = [];

  /*
  PostIt1: postIt = {
    titolo: "Ciao1",
    mess: "come va"
  };

  PostIt2: postIt = {
    titolo: "Ciao2",
    mess: "sglfha"
  };*/

  constructor(private obj: ChuckService) {}

  GetData() {
    this.obj.getData().subscribe(
      (x: any) => {
        console.log(x);
        this.postItArr = x;
        //console.log(this.postItArr);
      },
      err => console.error("Observer got an error: " + err)
    );
  }

  ObjectX = this.GetData();

  selezione1: postIt = new postIt();
  selezione2: number = 0;
  index: number = -1;

  leggiMess(_title: string, _mess: string, _num: number) {
    this.selezione1.titolo = _title;
    this.selezione1.mess = _mess;
    this.index = _num;
  }

  addPost(newPost: postIt) {
    //forse devo creare un oggetto tipo postIt
    //qui faccio il subscribe
    //poi faccio push nell'array

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
