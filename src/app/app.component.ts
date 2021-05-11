import { Component, VERSION } from '@angular/core';
import { findParentClassDeclaration } from '@angular/core/schematics/utils/typescript/class_declaration';
import { WebService } from './postit.service';

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
  main: Boolean = false;
  postItArr: Array<postIt> = [];

  constructor(private obj: WebService) {}

  getData() {
    this.obj.getData().subscribe(
      (x: any) => {
        this.postItArr = x;
      },
      err => console.error('Observer getData() got an error: ' + err)
    );
  }

  postData() {
    this.obj
      .postData(this.postItArr)
      .subscribe(
        (postItArr: Array<postIt>) => {},
        err => console.error('Observer  postData() got an error: ' + err)
      );
  }

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

  getKey(k: string) {
    let url = this.obj.apiURL;
    this.obj.apiURL = url.slice(0, 25) + k + url.slice(25);
    console.log(this.obj.apiURL);
    //this.showTitle();
    this.main = true;
    this.getData();
    //this.nome = k;
  }

  newKey(k: string) {
    this.obj.Key().subscribe(
      (k: any) => {
        let key = k.split('/')[3];
        this.obj.apiKey = key;
        console.log(key);
        return key;
        //this.getKey(key);
      },
      err => console.error('Observer newKey got an error: ' + err)
    );
  }
}
