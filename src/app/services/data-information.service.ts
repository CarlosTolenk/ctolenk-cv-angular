import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataInformationService {

    private homePage: Observable<any[]>;
    private resumePage = [];
    private contactPage = [];
    private urlData = 'assets/info.json'

  constructor(private _http: HttpClient, db: AngularFireDatabase) {
     db.object('homePage').valueChanges().subscribe((data)=>{
      this.setInformationLocal(data, 'homepage');
     });
     db.object('resumePage').valueChanges().subscribe((data)=>{    
      this.setInformationLocal(data, 'resumepage');
     });
     db.object('portfolioPage').valueChanges().subscribe((data)=>{    
      this.setInformationLocal(data, 'portfoliopage');
     });
     db.object('contactPage').valueChanges().subscribe((data)=>{    
      this.setInformationLocal(data, 'contactPage');
     });
   
  }

  setInformationLocal(data, label){
    localStorage.setItem(label, JSON.stringify(data));    
  }




}

