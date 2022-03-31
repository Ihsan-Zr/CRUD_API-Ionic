import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public GETSiswa: any;
  public deleteSiswa: any;
  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }


  ionViewWillEnter() {
    this._Getdata();
  }

  
  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ci_crud/index.php/api/GetData/');
    data.subscribe(result => {
      this.GETSiswa = result;
      console.log(result);
    });
  }


  public deleteData(npm) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/ci_crud/index.php/api/deletedata/' + npm
    );
    data.subscribe((result) => {
      this.deleteSiswa = result;
      console.log(result.status);
      if (result.status === 'berhasil') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }


}




