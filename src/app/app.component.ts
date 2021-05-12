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
  NKey: string;
  Err: boolean = false;
  selezione1: postIt = new postIt();
  selezione2: number = 0;
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

  esci() {
    this.main = false;
  }

  showTitle() {}

  logIn(k: string) {
    this.obj.apiKey = k;
    this.obj.apiTot = this.obj.apiURL + this.obj.apiKey + '/myKey';
    //console.log(this.obj.apiTot);
    this.obj.getData().subscribe(
      (x: any) => {
        for (let i in x) {
          this.postItArr.push(x[i]);
        }
        //console.log(this.postItArr);
        this.main = true;
      },
      err => {
        if (err.status === 404 || err.status === 400) {
          return (this.Err = true);
          //console.error('Wrong pass ' + err);
        } else {
          this.main = true;
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
        //console.log(key);
      },
      err => console.error('Observer newKey got an error: ' + err)
    );
  }
}
