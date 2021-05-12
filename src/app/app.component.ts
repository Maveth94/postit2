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
  postItArr: Array<postIt> = [];
  NKey: string;
  Err: boolean = false;
  selezione: number = -1;
  postSelez: postIt = new postIt();
  visImp: boolean = false;

  constructor(private obj: WebService) {}

  postData() {
    this.obj
      .postData(this.postItArr)
      .subscribe(
        (postItArr: Array<postIt>) => {},
        err => console.error('Observer  postData() got an error: ' + err)
      );
  }

  leggiMess(_title: string, _mess: string, _imp: boolean, _num: number) {
    this.postSelez.titolo = _title;
    this.postSelez.mess = _mess;
    this.postSelez.imp = _imp;
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

  funSelez(num: number) {
    switch (num) {
      case 1: {
        this.selezione = num;
        break;
      }
      case 2: {
        this.selezione = num;
        break;
      }

      case -1: {
        this.selezione = num;
        this.NKey = '';
        this.Err = false;
        this.postItArr = [];

        break;
      }

      default: {
        this.selezione = num;
        break;
      }
    }
  }

  logIn(k: string) {
    this.obj.apiKey = k;
    this.obj.apiTot = this.obj.apiURL + this.obj.apiKey + '/myKey';
    this.obj.getData().subscribe(
      (x: any) => {
        for (let i in x) {
          this.postItArr.push(x[i]);
        }
        this.selezione = 0;
      },
      err => {
        if (err.status === 404 || err.status === 400) {
          return (this.Err = true);
        } else {
          this.selezione = 0;
        }
      }
    );
  }

  newKey(k: string) {
    this.obj.Key().subscribe(
      (k: any) => {
        let key = k.split('/')[3];
        this.NKey = key;
        this.obj.apiKey = key;
      },
      err => console.error('Observer newKey got an error: ' + err)
    );
  }
}
