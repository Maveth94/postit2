import { Component, VERSION } from '@angular/core';
import { findParentClassDeclaration } from '@angular/core/schematics/utils/typescript/class_declaration';
import { ChuckService } from './postit.service';

export class postIt {
  titolo: string;
  mess: string;
  imp: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Post-it';

  postItArr: Array<postIt> = [];

  constructor(private obj: ChuckService) {}

  getData() {
    this.obj.getData().subscribe(
      (x: any) => {
        this.postItArr = x;
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  postData() {
    this.obj
      .postData(this.postItArr)
      .subscribe(
        (postItArr: Array<postIt>) => {},
        err => console.error('Observer got an error: ' + err)
      );
  }

  Data = this.getData();

  selezione1: postIt = new postIt();
  selezione2: number = 0;
  visImp: boolean = false;

  leggiMess(_title: string, _mess: string, _imp: boolean, _num: number) {
    this.selezione1.titolo = _title;
    this.selezione1.mess = _mess;
    this.selezione1.imp = _imp;
    this.postData();
  }

  addPost(newPost: postIt) {
    this.postItArr.push(newPost);
    this.postData();
  }

  impor() {
    if (this.visImp == true) {
      this.visImp = false;
      document.getElementById('Importanti').innerHTML = 'Visualizza importanti';
      return;
    } else {
      this.visImp = true;
      document.getElementById('Importanti').innerHTML = 'Visualizza tutti';
    }
  }

  delete(_index: number) {
    this.postItArr.splice(_index, 1);
    this.postData();
  }

  creaPost() {
    this.selezione2 = 1;
  }

  azzera() {
    this.selezione2 = 0;
  }
}
